import Image from 'next/image';
import { useState } from 'react';
import ReactHoverObserver from 'react-hover-observer';
import { StyledPathToSuccess } from './styles';
import MouseFollowProvider from '../MouseFollowProvider';

export default function PathToSuccess() {
  const [imageSrc, setImageSrc] = useState('/assets/images/path-ellipse.svg');

  return (
    <MouseFollowProvider theme="light">
      <ReactHoverObserver
        onMouseEnter={() => {
          setImageSrc('/assets/path-ellipse.gif');
        }}
      >
        <StyledPathToSuccess className="section-light">
          <div className="content-container success">
            <h2 data-scroll>Charting your course</h2>
            <div className="success__under-title" data-scroll>
              <h2>to triumph</h2>
              <span className="success__under-title__line" />
              <Image
                src={imageSrc}
                alt="ellipse"
                priority
                width={100}
                height={100}
              />
            </div>
            <ul className="success__list" data-scroll>
              <li className="success__list__item">
                <span className="success__list__item__number">| 01</span>
                <h3>idea</h3>
                <p>
                  Every great journey begins with a spark. We&apos;re here to
                  ignite and bring even the wildest and most complex ideas to
                  life.
                </p>
              </li>
              <li className="success__list__item">
                <span className="success__list__item__number">| 02</span>
                <h3>discovery</h3>
                <p>
                  On this leg, we delve deep into the process, analyzing and
                  crafting the perfect solution to conquer your challenges.
                </p>
              </li>
              <li className="success__list__item">
                <span className="success__list__item__number">| 03</span>
                <h3>wow design</h3>
                <p>
                  Structure, interface design, animation - this stage unveils a
                  glimpse of your product&apos;s stunning future appearance.
                </p>
              </li>
              <li className="success__list__item">
                <span className="success__list__item__number">| 04</span>
                <h3>build</h3>
                <p>
                  We commence with an MVP (Minimum Viable Product) and
                  meticulously refine every detail, ensuring a seamless build.
                </p>
              </li>
            </ul>
          </div>
        </StyledPathToSuccess>
      </ReactHoverObserver>
    </MouseFollowProvider>
  );
}
