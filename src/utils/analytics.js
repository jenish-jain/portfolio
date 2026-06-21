const GA_ID = 'G-PZ56PP4VHE';

export function trackEvent(name, params = {}) {
  if (window.gtag) {
    window.gtag('event', name, params);
  }
  if (window.posthog) {
    window.posthog.capture(name, params);
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
  if (window.gtag) {
    window.gtag('config', GA_ID, { page_path: path });
  }
  if (window.posthog) {
    window.posthog.capture('$pageview', { path });
  }
}
