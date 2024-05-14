import { NextSeo } from 'next-seo';
import { sanityClient } from 'lib/sanity.server';
import { postsQuery } from 'lib/sanity.queries';

import HeroContentWrapper from 'components/Hero';

import ArticleList from 'modules/Blog/ArticleList';
import { groq } from 'next-sanity';

export default function Blog({ posts, tags }) {
  const tagList = tags.map((tag) => tag.label);

  return (
    <>
      <NextSeo
        title="Panoptic Byte Blog: Insights into Web and Software Development"
        description="Explore the Panoptic Byte Blog for engaging articles and insights into the world 
        of web and software development, IT automation, technology consulting, and more. Stay updated with 
        industry trends and gain valuable knowledge from our experienced professionals."
        canonical="https://www.panopticbyte.com/blog"
      />

      <HeroContentWrapper theme="light" isEllipseAbsent>
        <h1 className="hero__title">Our blog</h1>
      </HeroContentWrapper>

      <ArticleList posts={posts} tagList={tagList} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);
  const tags = await sanityClient.fetch(groq`*[_type == "tag"]`);
  return {
    props: {
      posts,
      tags,
    },
  };
}
