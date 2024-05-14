import Head from 'next/head';
import { sanityClient } from 'lib/sanity.server';
import { legalTextQuery } from 'lib/sanity.queries';
import LegalText from 'modules/LegalText';

export default function PrivacyPolicy({ legalTextContent }) {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>

      <LegalText legalText={legalTextContent} />
    </>
  );
}

export async function getStaticProps() {
  const legalTextContent = await sanityClient.fetch(legalTextQuery, {
    slug: 'privacy-policy',
  });

  return {
    props: {
      legalTextContent,
    },
  };
}
