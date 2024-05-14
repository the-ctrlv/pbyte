import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { getClassNames, useWindowResize } from 'shared';
import { AnimateStartContext } from 'shared/context';

import MouseFollowProvider from '../MouseFollowProvider';

import { StyledMenu } from './styles';

gsap.registerPlugin(ScrollTrigger);
export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPageDark, setIsPageDark] = useState(null);
  const [logoSrc, setLogoSrc] = useState('/assets/icons/logo-home.svg');
  const { isAnimationFinished } = useContext(AnimateStartContext);
  const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

  const router = useRouter();
  const { width } = useWindowResize();

  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    if (isAnimationFinished) {
      document.body.style.overflow = 'unset';
    }
  }, [isAnimationFinished, router.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (width !== 0) {
      setIsPageDark(router.pathname === '/' || router.pathname === '/contact');
    }
  }, [router.pathname, width]);

  useEffect(() => {
    const settings = {
      scroller: 'html',
      scrub: false,
      start: 'top top+=60',
      end: 'bottom top+=61',
      pin: false,
      pinSpacing: false,
    };
    if (width !== 0 && ScrollTrigger) {
      setTimeout(() => {
        ScrollTrigger.refresh();
        ScrollTrigger.update();

        document.querySelectorAll('.section-dark').forEach((elem) => {
          ScrollTrigger.create({
            ...settings,
            trigger: elem,
            onToggle: (self) => {
              setIsPageDark(self.isActive);
            },
          });
        });
      }, 500);
    }
  }, [width, isPageDark, setIsPageDark]);

  useEffect(() => {
    if (isAnimationFinished) {
      tl.to('.hamburger-menu', { opacity: '1', duration: 0.5, delay: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimationFinished]);

  useEffect(() => {
    if (isMenuOpen) {
      setLogoSrc('/assets/icons/logo-home.svg');
    } else {
      if (isPageDark) {
        setLogoSrc('/assets/icons/logo-home.svg');
      }
      if (!isPageDark) {
        setLogoSrc('/assets/icons/logo-home-black.svg');
      }
    }
  }, [isMenuOpen, isPageDark]);

  const handleMenuClick = () => {
    if (isMenuOpen) {
      document.body.style.overflow = 'unset';
      gsap.to('.menu__nav__link', {
        y: '-150%',
        duration: 0.5,
        stagger: 0.1,
        delay: 0.1,
        onComplete: () => {
          setIsMenuOpen(!isMenuOpen);
          gsap.to('.index', {
            opacity: '0',
            transform: 'scale(0)',
            duration: 0.1,
            delay: 0.1,
          });
        },
      });
    }
    if (!isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
      document.body.style.overflow = 'hidden';
      gsap.to('.menu__nav__link', {
        y: '0%',
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        onComplete: () => {
          gsap.to('.index', {
            opacity: '1',
            transform: 'scale(1)',
            duration: 0.1,
            stagger: 0.1,
          });
        },
      });
    }
  };

  return (
    <>
      <div
        className={getClassNames(
          'hamburger-menu',
          isMenuOpen ? 'active' : '',
          isPageDark ? '' : 'light'
        )}
        onClick={() => handleMenuClick()}
      >
        <span className="hamburger-menu__line hamburger-menu__line--1" />
        <span className="hamburger-menu__line hamburger-menu__line--2" />
      </div>
      <Link
        href="/"
        style={{
          pointerEvents: router.pathname === '/' ? 'none' : 'auto',
        }}
      >
        <Image
          className="logo"
          src={logoSrc}
          alt="Logo"
          width="100"
          height="100"
          priority
        />
      </Link>
      <StyledMenu className={getClassNames(isMenuOpen ? 'active' : '')}>
        <MouseFollowProvider>
          <div
            className={getClassNames(
              'menu-container menu',
              isMenuOpen ? 'active' : ''
            )}
          >
            <nav className="menu__nav">
              <div className="menu__nav__wrapper">
                <Link
                  href="/about"
                  className="menu__nav__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                  <span className="index">#01</span>
                </Link>
              </div>
              <div className="menu__nav__wrapper">
                <Link
                  href="/portfolio"
                  className="menu__nav__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                  <span className="index">#02</span>
                </Link>
              </div>
              <div className="menu__nav__wrapper">
                <Link
                  href="/services"
                  className="menu__nav__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  services
                  <span className="index">#03</span>
                </Link>
              </div>
              <div className="menu__nav__wrapper">
                <Link
                  href="/blog"
                  className="menu__nav__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  blog
                  <span className="index">#04</span>
                </Link>
              </div>
              <div className="menu__nav__wrapper">
                <Link
                  href="/contact"
                  className="menu__nav__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  contact
                  <span className="index">#05</span>
                </Link>
              </div>
            </nav>
            <div className="menu__bottom">
              <p className="menu__bottom__copyright">
                © {year} Shampagne Technologies, LLC dba Panoptic Byte | All
                Rights Reserved
              </p>
              <div className="menu__bottom__links">
                <Link href="/terms-of-use">terms of use</Link>
                <Link href="/privacy-policy">privacy policy</Link>
              </div>
            </div>
          </div>
        </MouseFollowProvider>
      </StyledMenu>
    </>
  );
}
