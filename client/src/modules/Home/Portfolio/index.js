import Link from 'next/link';

import ProjectsSlider from 'components/ProjectsSlider';
import TitleSlider from 'components/TitleSlider';

import { useState } from 'react';

import { StyledPortfolio } from './styles';

export default function Portfolio() {
  const [slideChangeDirection, setSlideChangeDirection] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <StyledPortfolio className="section-dark">
      <div className="portfolio">
        <div className="portfolio__left-content">
          <div data-scroll>
            <span className="portfolio__left-content__work-type">
              Igniting Innovation - Transforming Business with Technology
            </span>
            <TitleSlider
              slideChangeDirection={slideChangeDirection}
              slideIndex={slideIndex}
            />
            <Link className="portfolio__left-content__link" href="/contact">
              let&apos;s get started
            </Link>
          </div>
        </div>
        <div className="portfolio__right-content">
          <ProjectsSlider
            setSlideChangeDirection={setSlideChangeDirection}
            setSlideIndex={setSlideIndex}
          />
        </div>
      </div>
    </StyledPortfolio>
  );
}
