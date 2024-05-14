import Link from 'next/link';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledDifference } from './styles';

export default function Difference({ cta }) {
  const tagline = cta.text;
  const pageLink = cta.route.linkUrl;

  return (
    <MouseFollowProvider theme="light">
      <StyledDifference className="section-light ">
        <div className="content-container difference">
          {tagline.map((item, i) => (
            <h3 key={i} data-scroll>
              {item.children[0].text}
            </h3>
          ))}
          <Link
            href={`${pageLink}`}
            className="btn-ellipse btn-ellipse--black"
            data-scroll
          >
            {cta.buttonText}
          </Link>
        </div>
      </StyledDifference>
    </MouseFollowProvider>
  );
}
