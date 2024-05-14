import { NextSeo } from 'next-seo';

import Works from 'modules/Portfolio/Works';

import ContactForm from 'components/Contact';
import HeroContentWrapper from 'components/Hero';
import Niches from 'components/Niches';
import MouseFollowProvider from 'components/MouseFollowProvider';

import { sanityClient } from 'lib/sanity.server';
import { nicheQuery, projectQuery } from 'lib/sanity.queries';

export default function Portfolio({ niches, projects }) {
  return (
    <>
      <NextSeo
        title="Panoptic Byte Portfolio | Our Work in Web & Software Development"
        description="Explore Panoptic Byte's portfolio to see our cutting-edge solutions 
        in web and software development. Our work showcases our expertise in transforming 
        ideas into innovative digital products."
        canonical="https://www.panopticbyte.com/portfolio"
      />

      <HeroContentWrapper theme="light" isEllipseAbsent>
        <h1
          className="hero__title with-lines"
          style={{ textTransform: 'none' }}
        >
          Our work
        </h1>
      </HeroContentWrapper>
      <MouseFollowProvider theme="dark">
        <Niches niches={niches.map((niche) => niche.title)} />
        <Works projects={projects} />
      </MouseFollowProvider>

      <ContactForm theme="light" />
    </>
  );
}
export const getStaticProps = async () => {
  const niches = await sanityClient.fetch(nicheQuery);
  const projects = await sanityClient.fetch(projectQuery);

  return {
    props: { niches, projects },
  };
};
