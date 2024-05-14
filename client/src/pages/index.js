import Link from 'next/link';
import { NextSeo } from 'next-seo';

import ContactForm from 'components/Contact';
import PathToSuccess from 'components/PathToSuccess';
import HeroContentWrapper from 'components/Hero';

// Modules
import WhatWeDo from 'modules/Home/WhatWeDo';
import WhatWeLove from 'modules/Home/WhatWeLove';
import Portfolio from 'modules/Home/Portfolio';
import Clients from 'modules/Home/Clients';

// Sanity Config
import { sanityClient } from 'lib/sanity.server';
import { servicesQuery, projectQuery } from 'lib/sanity.queries';

export default function Home({ services, projects, isAnimationFinished }) {
  return (
    <>
      <NextSeo
        title="Panoptic Byte: Innovative Web & App Development, UI/UX Design, and IT Solutions"
        description="Unleash your business's potential with Panoptic Byte. We specialize in bespoke web and app 
        development,intuitive UI/UX design, and strategic IT solutions. Experience the transformative power of 
        technology with our team of dedicated professionals, committed to propelling your business to the 
        forefront of innovation."
        canonical="https://www.panopticbyte.com/"
      />

      <HeroContentWrapper
        theme="dark"
        isAnimationFinished={isAnimationFinished}
      >
        <h1 className="hero__title">
          Functionality & <br />
          Aesthetic
        </h1>
        <Link
          href="/contact"
          className="hero__circle-link btn-ellipse subtitle-animated"
        >
          LET&#39;S TALK SHOP
        </Link>
      </HeroContentWrapper>

      <WhatWeDo data={services} />
      <WhatWeLove />
      <PathToSuccess />
      <Portfolio />
      <Clients clients={projects} />
      <ContactForm theme="dark" />
    </>
  );
}

export const getStaticProps = async () => {
  const services = await sanityClient.fetch(servicesQuery);
  const projects = await sanityClient.fetch(projectQuery);

  return {
    props: { services, projects },
  };
};
