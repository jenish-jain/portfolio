// Strips matching surrounding quotes and stray whitespace/newlines that
// commonly sneak in when pasting a secret into a .env file by hand.
function cleanEnvValue(v) {
  if (!v) return v;
  return v.trim().replace(/^(['"])(.*)\1$/, '$2');
}

module.exports = { cleanEnvValue };
