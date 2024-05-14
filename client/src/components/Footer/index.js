import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useWindowResize } from 'shared';

import { StyledFooter } from './styles';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowResize();

  useEffect(() => {
    if (width !== 0) {
      setIsMobile(width < 1025);
    }
  }, [width, isMobile, setIsMobile]);

  const date = new Date();
  const year = date.getFullYear();

  return (
    <StyledFooter className="section-dark">
      <div className="footer-container">
        <div className="footer-container__top">
          <Image
            src={
              isMobile
                ? '/assets/icons/logo-home.svg'
                : '/assets/icons/logo-footer.svg'
            }
            alt="logo"
            width={isMobile ? 140 : 50}
            height={isMobile ? 60 : 50}
            unoptimized
          />
          <nav>
            <Link href="/about" className="footer-container__top__link">
              about
            </Link>
            <Link href="/portfolio" className="footer-container__top__link">
              portfolio
            </Link>
            <Link href="/services" className="footer-container__top__link">
              services
            </Link>
            <Link href="/blog" className="footer-container__top__link">
              blog
            </Link>
            <Link href="/contact" className="footer-container__top__link">
              contact
            </Link>
          </nav>
        </div>
        <div className="footer-container__bottom">
          <p className="footer-container__bottom__copyright">
            © {year} Shampagne Technologies, LLC dba Panoptic Byte | All Rights
            Reserved
          </p>
          <div className="footer-container__bottom__links">
            <Link href="/terms-of-use">Terms of use</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
