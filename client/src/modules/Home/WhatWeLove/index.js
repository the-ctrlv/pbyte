import MouseFollowProvider from 'components/MouseFollowProvider';
import { StyledWhatWeLove } from './styles';

export default function WhatWeLove() {
  return (
    <MouseFollowProvider theme="dark">
      <StyledWhatWeLove className="section-dark">
        <div className="content-container what-we-love">
          <div className="what-we-love__text-content">
            <div data-scroll>
              <h3>we</h3>
              <p>
                a fusion of innovators <br /> entrepreneurial wizards <br />
                tastemakers extraordinaire
              </p>
            </div>
            <div data-scroll>
              <h3>love</h3>
              <p>
                mastering code
                <br /> crafting wow designs
                <br />
                chaos of complexity
              </p>
            </div>
            <div data-scroll>
              <h3>
                devotion <br /> and humility
              </h3>
              <p>
                We are 97% confident <br /> in our remarkable outcomes <br />{' '}
                leaving 3% for a dash of modesty
              </p>
            </div>
          </div>
          <div className="what-we-love__title-wrapper">
            <h2 data-scroll>where artistry meets strategy</h2>
          </div>
        </div>
      </StyledWhatWeLove>
    </MouseFollowProvider>
  );
}
