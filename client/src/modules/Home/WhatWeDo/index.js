import Accordion from 'components/Accordion';
import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledWhatWeDo } from './styles';

export default function WhatWeDo({ data }) {
  return (
    <MouseFollowProvider theme="light">
      <StyledWhatWeDo className="section-light">
        <div className="content-container what-we-do">
          <div className="what-we-do__title-wrapper" data-scroll>
            <h2>
              our <br /> service
              <br />
              suite
            </h2>
          </div>
          <ul className="what-we-do__services">
            {data.map((service) => (
              <Accordion
                key={service.slug}
                title={service.title}
                description={service.excerpt}
              />
            ))}
          </ul>
        </div>
      </StyledWhatWeDo>
    </MouseFollowProvider>
  );
}
