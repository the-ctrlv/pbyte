import { NextSeo } from 'next-seo';
import { sanityClient } from 'lib/sanity.server';
import { servicesPageQuery } from 'lib/sanity.queries';

import ServiceList from 'modules/Services/ServiceList';
import Difference from 'modules/Services/Difference';

import HeroContentWrapper from 'components/Hero';

export default function Services({ servicesPage }) {
  const { hero, services, cta } = servicesPage.pageSections;
  const headerTitle = hero.heading.heading;
  const tagline = hero.tagline[0].children;
  return (
    <>
      <NextSeo
        title="Panoptic Byte Services | Professional Web, Software, & App Development"
        description="Panoptic Byte offers a diverse range of services including web and software development, 
        mobile app creation, cloud solutions, and more. Discover how we can help your business evolve in the digital 
        world."
        canonical="https://www.panopticbyte.com/services"
      />

      <HeroContentWrapper theme="light" isSubtitleRight>
        <h1 className="hero__title small">{headerTitle}</h1>
        <p className="hero__subtitle subtitle-animated">
          <strong>{tagline[0].text}</strong>
          {tagline[1].text}
        </p>
      </HeroContentWrapper>
      <ServiceList services={services} />
      <Difference cta={cta} />
    </>
  );
}

export async function getStaticProps() {
  const servicesPage = await sanityClient.fetch(servicesPageQuery);
  return {
    props: {
      servicesPage,
    },
  };
}
