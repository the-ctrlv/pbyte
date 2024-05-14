import ContactWrapper from 'modules/Contact/ContactWrapper';
import { NextSeo } from 'next-seo';

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact Panoptic Byte - Reach Our Dedicated Tech Team"
        description="Reach out to Panoptic Byte for all your software development needs. 
        Our attentive and dedicated team is ready to discuss how our innovative technology 
        solutions can help transform your business."
        canonical="https://www.panopticbyte.com/contact"
      />

      <ContactWrapper />
    </>
  );
}
