'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const PIXEL_ID = '844031562134971';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const trackMetaEvent = (eventName: string, data?: object) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, data);
  }
};

export const MetaPixel = () => {
  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
};
