const nodemailer = require('nodemailer');
const querystring = require('querystring');

function parseBody(event) {
  const contentType = (event.headers && (event.headers['content-type'] || event.headers['Content-Type'])) || '';
  const raw = event.body || '';
  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(raw);
    } catch (_) {
      return {};
    }
  }
  // default: x-www-form-urlencoded
  return querystring.parse(raw);
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { firstName, email, message } = parseBody(event);

  // Configure SMTP via environment variables on Netlify
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const toAddress = process.env.EMAIL_TO || process.env.EMAIL_USER;

  const mailOptions = {
    from: email,
    to: toAddress,
    subject: `New message from ${firstName || 'Anonymous'} via Newsletter Form`,
    text: `Name: ${firstName}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    const origin = (event.headers && (event.headers.origin || event.headers.Origin || event.headers.referer || event.headers.Referer)) || '';
    const siteOrigin = String(origin).replace(/\/$/, '');
    const location = siteOrigin ? `${siteOrigin}/posts/?subscribed=1` : '/posts/?subscribed=1';

    return {
      statusCode: 303,
      headers: { Location: location },
      body: '',
    };
  } catch (error) {
    return { statusCode: 500, body: 'Error sending email.' };
  }
};


