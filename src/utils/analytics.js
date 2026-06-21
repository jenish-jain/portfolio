const GA_ID = 'G-PZ56PP4VHE';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref'];

function getUtmParams() {
  const params = new URLSearchParams(window.location.search || window.location.hash.split('?')[1] || '');
  const utm = {};
  UTM_KEYS.forEach((key) => {
    const val = params.get(key);
    if (val) utm[key] = val;
  });
  return utm;
}

let cachedUtm = null;

function getUtm() {
  if (!cachedUtm) cachedUtm = getUtmParams();
  return cachedUtm;
}

export function trackEvent(name, params = {}) {
  const merged = { ...getUtm(), ...params };
  if (window.gtag) {
    window.gtag('event', name, merged);
  }
  if (window.posthog) {
    window.posthog.capture(name, merged);
  }
}

export function trackClick(category, label, url) {
  trackEvent('click', {
    event_category: category,
    event_label: label,
    link_url: url,
  });
}

export function trackSectionView(sectionId) {
  trackEvent('section_view', {
    event_category: 'engagement',
    section: sectionId,
  });
}

export function trackPageView(path) {
  const utm = getUtm();
  if (window.gtag) {
    window.gtag('config', GA_ID, { page_path: path, ...utm });
  }
  if (window.posthog) {
    window.posthog.capture('$pageview', { path, ...utm });
  }
}
