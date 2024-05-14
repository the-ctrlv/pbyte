import { useRef, useState } from 'react';
import Image from 'next/image';
import { getClassNames, useClickOutside } from 'shared';

import { SlideDown } from 'react-slidedown';

import { StyledAccordion } from './styles';
import 'react-slidedown/lib/slidedown.css';

export default function Accordion({ title, description }) {
  const [active, setActive] = useState(false);
  const clickRef = useRef(null);

  const toggleActive = () => {
    setActive(!active);
  };

  useClickOutside(clickRef, () => setActive(false));

  return (
    <StyledAccordion className="accordion" data-scroll ref={clickRef}>
      <div className="accordion__header flex-between" onClick={toggleActive}>
        <Image
          src="/assets/icons/down-arrow.svg"
          className={getClassNames('accordion__icon', active && 'active')}
          alt="down arrow"
          width="100"
          height="100"
        />

        <h4>{title}</h4>
      </div>
      <SlideDown className="accordion__description">
        {active ? <p>{description}</p> : null}
      </SlideDown>
    </StyledAccordion>
  );
}
