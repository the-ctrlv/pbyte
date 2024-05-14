/* eslint-disable react/no-unescaped-entities */
import { useWindowResize } from 'shared';
import { useEffect, useState } from 'react';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledServices } from './styles';

export default function HowItWorks() {
  const { width } = useWindowResize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 700);
  }, [width]);

  return (
    <MouseFollowProvider theme="dark">
      <StyledServices className="section-dark section-dark--ellipse">
        <div className="content-block">
          <span className="content-block__note" data-scroll>
            The seed is planted
          </span>
          <span className="content-block__line" data-scroll />
          <h2 className="content-block__title" data-scroll>
            Igniting a spark
          </h2>
          <p className="content-block__description" data-scroll>
            It all started with a dream to create a development studio that
            would create as much prosperity internally as we do for our clients.
          </p>
          <p>
            <strong>Thus, in 2019, Panoptic Byte was born.</strong>
          </p>
          <span className="content-block__line" />
          <span className="content-block__note" data-scroll>
            Jake Shampine
          </span>
          <span
            className="content-block__background"
            style={{
              // eslint-disable-next-line prettier/prettier
              background: `url('/assets/images/years/2019${
                isMobile ? '-mob.png' : '.png'
              }') center center/80% no-repeat`,
            }}
          />
        </div>

        <div className="content-block">
          <span className="content-block__note" data-scroll>
            Raising the bar
          </span>
          <span className="content-block__line" data-scroll />
          <h2 className="content-block__title" data-scroll>
            Persistence and growth
          </h2>
          <p className="content-block__description" data-scroll>
            As we pushed forward, we realized that merely being a studio wasn't
            enough. We set our sights on becoming the best in our field.
            Embracing challenges and honing our skills, we forged a powerful
            strategy to reach new heights.
            <br />
            <br />
            Embarking on this carefully crafted{' '}
            <strong> path to your success. </strong> we're eager to bring our
            strategy, skills, and experience to your business, creating{' '}
            <strong style={{ display: 'block' }}>
              {' '}
              the best products in your niche.
            </strong>
          </p>
          <span
            className="content-block__background"
            style={{
              // eslint-disable-next-line prettier/prettier
              background: `url('/assets/images/years/2020${
                isMobile ? '-mob.png' : '.png'
              }') center center/80% no-repeat`,
            }}
          />
        </div>

        <div className="content-block">
          <span className="content-block__note" data-scroll>
            Sky's the limit
          </span>
          <span className="content-block__line" data-scroll />
          <h2 className="content-block__title" data-scroll>
            Ascending to greatness
          </h2>
          <p className="content-block__description" data-scroll>
            Over the years, we've strategically grown our core team to include a
            broad variety of competencies and experience. We further leverage a
            curated network of relationships which we tap into as needed to
            augment our capacity,{' '}
            <strong>
              {' '}
              effectively allowing us to tackle projects of complexity.{' '}
            </strong>{' '}
            Together, we've consistently proven our ability to deliver, and our
            committment to client satisfaction.
            <br />
            <br />
            With our <strong> guarantee to hit the mark every time</strong>,
            we're ready to implement our strategy, skills, and experience in
            your business,{' '}
            <strong style={{ display: 'block' }}>
              {' '}
              helping you soar to new heights of success.
            </strong>
          </p>
          <span className="content-block__line" data-scroll />
          <span className="content-block__note" data-scroll>
            The Panoptic Byte Team
          </span>
          <span
            className="content-block__background"
            style={{
              // eslint-disable-next-line prettier/prettier
              background: `url('/assets/images/years/2023${
                isMobile ? '-mob.png' : '.png'
              }') center center/80% no-repeat`,
            }}
          />
        </div>
      </StyledServices>
    </MouseFollowProvider>
  );
}
