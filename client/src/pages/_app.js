import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { GA_MEASUREMENT_ID, pageview } from 'lib/gtag';

import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Loader from 'components/Loader';

import { AnimateStartContext } from 'shared/context';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { GlobalStyle } from 'theme/styles';

import 'normalize.css/normalize.css';

gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  const meta = {
    title: 'Panoptic Byte',
    description:
      "Innovating Order from Chaos: The Silent Architects of Tomorrow's Technology.",
    image:
      'https://cdn.sanity.io/images/vanqukwj/production/5fe8fae768fedacfd423229438d64a04248c31d3-400x400.png',
    siteUrl: 'https://www.panopticbyte.com',
  };

  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
  const router = useRouter();
  useEffect(() => {
    if (isAnimationFinished) {
      tl.to('.logo', { opacity: '1', duration: 0.5, delay: 1 }, 0);
      document.querySelectorAll('[data-scroll=true]').forEach((elem) => {
        gsap.to(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 90%',
            scrub: false,
            onEnter: () => {
              elem.classList.add('visible');
            },
          },
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimationFinished, router.pathname]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const AnimateStartContextValueProvider = useMemo(
    () => ({ isAnimationFinished, setIsAnimationFinished }),
    [isAnimationFinished, setIsAnimationFinished]
  );

  return (
    <>
      <DefaultSeo
        title={meta.title}
        description={meta.description}
        canonical={meta.siteUrl}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: meta.siteUrl,
          site_name: meta.title,
          images: [
            {
              url: meta.image,
              width: 800,
              height: 600,
              alt: 'Panoptic Byte Logo',
            },
          ],
          title: meta.title,
          description: meta.description,
        }}
        twitter={{
          handle: '@panopticbyte',
          site: '@panopticbyte',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'stylesheet preload prefetch',
            href: '/assets/fonts/Krona One-Regular.ttf',
            as: 'style',
            type: 'text/css',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'stylesheet preload prefetch',
            href: '/assets/fonts/Mont-Regular.ttf',
            as: 'style',
            type: 'text/css',
            crossOrigin: 'anonymous',
          },
        ]}
      />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      <AnimateStartContext.Provider value={AnimateStartContextValueProvider}>
        <Loader />
        <GlobalStyle />
        <Menu />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </AnimateStartContext.Provider>
    </>
  );
}

export default MyApp;
