import Head from 'next/head';
import Image from 'next/image';

import ContactForm from 'components/Contact';
import HeroContentWrapper from 'components/Hero';
import CaseStudySection from 'components/CaseStudySection';
import Phones from 'components/Phones';
import PortfolioSlider from 'components/PortfolioSlider';

import { policySmartTextData } from 'data/data';
import { sanityClient } from 'lib/sanity.server';
import { projectQuery } from 'lib/sanity.queries';

export default function PolicySmart({ projects }) {
  return (
    <>
      <Head>
        <title>PolicySmart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroContentWrapper theme="light" isEllipseAbsent>
        <h1 className="hero__title with-lines">PolicySmart</h1>
        <p className="hero__subtitle subtitle-animated">
          Website Design & Development
        </p>
      </HeroContentWrapper>

      <CaseStudySection
        isOverview
        sectionIndex="01"
        section="overview"
        data={policySmartTextData.overview}
      >
        <div className="content-container overview">
          <Image
            src="/assets/images/policy-smart.png"
            alt="Policy Smart"
            width={100}
            height={100}
            unoptimized
          />
        </div>
        <Phones theme="policy" />
      </CaseStudySection>

      <CaseStudySection
        isResult
        resultSection="result"
        resultTitle="A blazing-fast website that converts and a reimagined brand that stands out."
        resultText="We created a new brand identity and website that is fast and easy to use. 
        The new website is a powerful tool for PolicySmart to generate leads and convert them into customers."
        sectionIndex="02"
        screens="1"
        months="1"
        people="3"
      />
      <PortfolioSlider ourProjects={projects} />
      <ContactForm theme="light" />
    </>
  );
}

export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectQuery);

  return {
    props: {
      projects,
    },
  };
}