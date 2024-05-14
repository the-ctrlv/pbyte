import Link from 'next/link';

import HeroContentWrapper from 'components/Hero';

export default function Custom404() {
  return (
    <HeroContentWrapper theme="dark" isEllipseAbsent>
      <h1 className="hero__title">Oops...Page not found</h1>
      <Link
        href="/"
        className="hero__circle-link btn-ellipse subtitle-animated"
      >
        BACK HOME
      </Link>
    </HeroContentWrapper>
  );
}
