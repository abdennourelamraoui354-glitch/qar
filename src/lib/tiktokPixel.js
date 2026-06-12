export const TIKTOK_PIXEL_ID = 'D1MFAIJC77U87UH7LNJ0';

function getTtq() {
  if (typeof window === 'undefined') return null;
  return window.ttq ?? null;
}

function safeRun(fn) {
  try {
    fn();
  } catch {
    // TikTok blocked or unavailable — never break the site
  }
}

/** Inject TikTok Pixel base code (same logic as official snippet). */
export function initTikTokPixel() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__tiktokPixelInitialized) return;

  window.__tiktokPixelInitialized = true;

  safeRun(() => {
    const w = window;
    const t = 'ttq';
    w.TiktokAnalyticsObject = t;
    const ttq = (w[t] = w[t] || []);
    ttq.methods = [
      'page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready',
      'alias', 'group', 'enableCookie', 'disableCookie', 'holdConsent', 'revokeConsent', 'grantConsent',
    ];
    ttq.setAndDefer = (target, method) => {
      target[method] = (...args) => {
        target.push([method, ...args]);
      };
    };
    ttq.methods.forEach((method) => ttq.setAndDefer(ttq, method));
    ttq.instance = (id) => {
      const instance = ttq._i[id] || [];
      ttq.methods.forEach((method) => ttq.setAndDefer(instance, method));
      return instance;
    };
    ttq.load = (id, options) => {
      const src = 'https://analytics.tiktok.com/i18n/pixel/events.js';
      ttq._i = ttq._i || {};
      ttq._i[id] = [];
      ttq._i[id]._u = src;
      ttq._t = ttq._t || {};
      ttq._t[id] = +new Date();
      ttq._o = ttq._o || {};
      ttq._o[id] = options || {};
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `${src}?sdkid=${id}&lib=${t}`;
      const first = document.getElementsByTagName('script')[0];
      first.parentNode.insertBefore(script, first);
    };

    ttq.load(TIKTOK_PIXEL_ID);
    ttq.page();
  });
}

export function trackPageView() {
  safeRun(() => {
    const ttq = getTtq();
    ttq?.page?.();
  });
}

export function trackViewContent(props = {}) {
  safeRun(() => {
    getTtq()?.track?.('ViewContent', props);
  });
}

export function trackLead(props = {}) {
  safeRun(() => {
    getTtq()?.track?.('Lead', props);
  });
}

export function trackContact(props = {}) {
  safeRun(() => {
    getTtq()?.track?.('Contact', props);
  });
}

export function trackSubmitForm(props = {}) {
  safeRun(() => {
    getTtq()?.track?.('SubmitForm', props);
  });
}

export function trackClickButton(props = {}) {
  safeRun(() => {
    getTtq()?.track?.('ClickButton', props);
  });
}
