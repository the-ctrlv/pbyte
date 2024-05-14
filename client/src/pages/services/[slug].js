import { NextSeo } from 'next-seo';
import { sanityClient } from 'lib/sanity.server';
import {
  serviceBySlugQuery,
  nicheQuery,
  projectQuery,
  serviceDocBySlugQuery,
} from 'lib/sanity.queries';

import HeroContentWrapper from 'components/Hero';
import ContactForm from 'components/Contact';
import Niches from 'components/Niches';
import PortfolioSlider from 'components/PortfolioSlider';

import Steps from 'modules/SingleService/Steps';

export default function Services({ service, niches, projects, serviceDoc }) {
  const ourSteps = service?.pageSections.ourSteps;
  const seo = service?.seo;

  return (
    <>
      <NextSeo
        title={seo?.title}
        description={seo?.description}
        canonical={seo?.url}
      />

      <HeroContentWrapper theme="light" isEllipseAbsent>
        <h1 className="hero__title with-lines">{service?.title}</h1>
      </HeroContentWrapper>

      <Niches niches={niches?.map((niche) => niche.title)} />
      <Steps steps={ourSteps} serviceDetails={serviceDoc} />
      <PortfolioSlider ourProjects={projects} />
      <ContactForm theme="light" />
    </>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "page" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const service = await sanityClient.fetch(serviceBySlugQuery, { slug });
  const serviceDoc = await sanityClient.fetch(serviceDocBySlugQuery, { slug });
  const projects = await sanityClient.fetch(projectQuery);
  const niches = await sanityClient.fetch(nicheQuery);

  return {
    props: {
      service,
      niches,
      projects,
      serviceDoc,
    },
  };
}
