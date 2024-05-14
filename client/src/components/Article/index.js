import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import { getClassNames } from 'shared';

import { StyledArticle } from './styles';

export default function Article({ article, isVertical }) {
  const tag = article?.tags?.[0]?.label;
  const date = parseISO(article?.publishedAt);
  const publishedDate = format(date, 'LLL d, yyyy');
  return (
    <StyledArticle
      className={getClassNames('article', isVertical && 'article--vertical')}
      key={article.id}
      data-scroll
      href={`/blog/${article.slug}`}
    >
      <div className="article__image-wrapper">
        <Image
          src={article.coverImage?.url}
          alt={article.coverImage?.altText}
          width="100"
          height="100"
          unoptimized
        />
        <span className="article__image-wrapper__filter">{tag}</span>
      </div>
      <div className="article__content">
        <span className="article__content__date">{publishedDate}</span>
        <div>
          <h3 className="article__content__title">{article.title}</h3>
          <p className="article__content__description">{article.excerpt}</p>
        </div>
        {!isVertical && (
          <span className="article__content__link">Read more</span>
        )}
      </div>
    </StyledArticle>
  );
}
