/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledArticleTopic } from './styles';

export default function ArticleTopic({ post }) {
  return (
    <MouseFollowProvider theme="light">
      <StyledArticleTopic className="section-light">
        <div className="content-container article">
          <h2 data-scroll>{post?.title}</h2>
          <Image
            src={post?.coverImage.url}
            alt={post?.coverImage.altText}
            width="100"
            height="100"
            unoptimized
            data-scroll
          />
          <div className="article__content-wrapper">
            {post?.body.map((item) => {
              switch (item.style) {
                case 'h4':
                  return <h4 data-scroll>{item.children[0].text}</h4>;
                case 'normal':
                  return <p data-scroll>{item.children[0].text}</p>;
                default:
                  return 'You need a case to handle this content style';
              }
            })}
            <ul className="article__text-content" data-scroll>
              <li />
            </ul>
            <ul className="article__tags">
              {post?.tags.map((tag) => (
                <li data-scroll>{tag.label}</li>
              ))}
            </ul>
          </div>
        </div>
      </StyledArticleTopic>
    </MouseFollowProvider>
  );
}
