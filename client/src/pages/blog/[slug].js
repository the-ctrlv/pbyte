import { NextSeo } from 'next-seo';
import { sanityClient } from 'lib/sanity.server';
import { postBySlugQuery, postsQuery } from 'lib/sanity.queries';

import ArticleTopic from 'modules/SingleArticle/ArticleTopic';
import SuggestedArticles from 'modules/SingleArticle/SuggestedArticles';

export default function SingleArticle({ post, posts }) {
  const seo = post?.seo;
  return (
    <>
      <NextSeo
        title={seo?.title}
        description={seo?.description}
        canonical={seo?.url}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          // url: seo.openGraph.url,
          siteName: 'Panoptic Byte',
          images: [
            {
              url: seo?.ogImage.url,
              width: 800,
              height: 600,
              alt: seo?.ogImage.altText,
            },
          ],
          title: seo?.title,
          description: seo?.description,
        }}
      />

      <ArticleTopic post={post} />
      <SuggestedArticles posts={posts} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const post = await sanityClient.fetch(postBySlugQuery, { slug });
  const posts = await sanityClient.fetch(postsQuery);
  return {
    props: {
      post,
      posts,
    },
  };
}
