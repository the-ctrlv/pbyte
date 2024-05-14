import { useEffect, useState } from 'react';

import Select from 'components/Select';
import Article from 'components/Article';
import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledArticleList } from './styles';

export default function ArticleList({ posts, tagList }) {
  const [filteredArticles, setFilteredArticles] = useState(posts);
  const [filterTag, setFilterTag] = useState('All');
  const [isAllShowed, setIsAllShowed] = useState(false);
  const [index, setIndex] = useState(4);

  const initialArticles = filteredArticles.slice(0, index);

  const loadMore = () => {
    setIndex(index + 4);
  };

  useEffect(() => {
    if (index >= filteredArticles.length) {
      setIsAllShowed(true);
    } else {
      setIsAllShowed(false);
    }
  }, [index, filteredArticles]);

  useEffect(() => {
    if (filterTag === 'All') {
      setFilteredArticles(posts);
    } else {
      setFilteredArticles(
        posts.filter((item) => item.tags?.[0]?.label === filterTag)
      );
    }
    setTimeout(() => {
      document.querySelectorAll('.article').forEach((elem) => {
        elem.classList.add('visible');
      });
    }, 100);
  }, [filterTag, posts]);

  return (
    <MouseFollowProvider theme="dark">
      <StyledArticleList className="section-dark">
        <div className="content-container articles">
          <div data-scroll className="select-wrapper">
            <Select
              tagList={tagList}
              setFilterTag={setFilterTag}
              setIndex={setIndex}
            />
          </div>

          <div className="articles__main-wrapper">
            {filteredArticles.map((article) => (
              <Article article={article} key={article.id} isVertical />
            ))}
          </div>

          <div className="articles__list">
            {initialArticles.map((article) => (
              <Article article={article} key={article.id} />
            ))}
          </div>

          {!isAllShowed && (
            <span className="btn-ellipse" onClick={loadMore}>
              SHOW MORE
            </span>
          )}
        </div>
      </StyledArticleList>
    </MouseFollowProvider>
  );
}
