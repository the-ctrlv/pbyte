import { useState } from 'react';
import Image from 'next/image';
import ReactHoverObserver from 'react-hover-observer';

import Link from 'next/link';
import { StyledSteps } from './styles';

export default function Steps({ steps, serviceDetails }) {
  const [imageSrc, setImageSrc] = useState('/assets/icons/web-software.png');
  const header = steps ? steps.columns?.[0].header : '';
  const rightContentSteps =
    steps?.columns && steps.columns.length > 1 ? steps.columns[1].area : [];
  const details = serviceDetails ? serviceDetails?.description : [];
  const designRushImageSrc =
    'https://cdn.sanity.io/images/vanqukwj/production/d604d8d6f6c8e7667ede943d2bf8baf1355dfdeb-500x750.png';
  return (
    <ReactHoverObserver
      onMouseEnter={() => {
        setImageSrc('/assets/web-software.gif');
      }}
      onMouseLeave={() => {
        setImageSrc('/assets/icons/web-software.png');
      }}
    >
      <StyledSteps className="section-light section-light--ellipse">
        <div className="content-container steps">
          <div className="steps__left-content">
            <h2>{header}</h2>
            {details.map((detail, i) => (
              <p key={i}>{detail.text}</p>
            ))}
            <Image
              src={imageSrc}
              alt="ellipse"
              priority
              width={300}
              height={300}
              optimized
            />
            <Link
              href="https://www.designrush.com/agency/profile/panoptic-byte"
              rel="noopener noreferrer"
              alt="DesignRush"
              target="_blank"
            >
              <Image
                src={designRushImageSrc}
                alt="ellipse"
                priority
                width={333}
                height={500}
                quality={100}
              />
            </Link>
          </div>
          <ul className="steps__right-content">
            <h2>Our Process -</h2>
            {rightContentSteps.map((step, i) => (
              <li className="steps__right-content__item" key={i}>
                <h4>{step.title}</h4>
                <h5>{step.text}</h5>
                <p>{step.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </StyledSteps>
    </ReactHoverObserver>
  );
}
