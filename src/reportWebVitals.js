const reportWebVitals = () => {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    const sendToAnalytics = ({ name, delta, id }) => {
      if (!window.gtag) return;
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        non_interaction: true,
      });
    };

    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  });
};

export default reportWebVitals;
