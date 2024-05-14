import { NextSeo } from 'next-seo';

import ContactForm from 'components/Contact';

import HowItWorks from 'modules/About/HowItWorks';

import HeroContentWrapper from 'components/Hero';
import PathToSuccess from 'components/PathToSuccess';

export default function About() {
  return (
    <>
      <NextSeo
        title="About Panoptic Byte - Your Partner in Digital Transformation"
        description="Discover the story behind Panoptic Byte, your dedicated partner 
        for bespoke software solutions. Learn about our journey, our approach, and our 
        commitment to helping businesses unlock new opportunities through 
        innovative technology"
        canonical="https://www.panopticbyte.com/about"
      />

      <HeroContentWrapper theme="light" isEllipseAbsent isSubtitleRight>
        <h1 className="hero__title">
          Welcome to <br />
          Panoptic Byte
        </h1>
        <p className="hero__subtitle subtitle-animated">
          We thrive on the cutting edge of technology, driven by a passion for
          innovation and a relentless pursuit of excellence. Our team of
          dedicated professionals is committed to transforming businesses by
          crafting bespoke software solutions that address complex challenges
          and unlock new opportunities.
        </p>
      </HeroContentWrapper>

      <HowItWorks />
      <PathToSuccess />
      <ContactForm theme="dark" />
    </>
  );
}
