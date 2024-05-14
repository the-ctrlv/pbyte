import Link from 'next/link';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledServiceList } from './styles';

export default function ServiceList({ services }) {
  return (
    <MouseFollowProvider theme="dark">
      <StyledServiceList className="section-dark section-dark--ellipse">
        <ul className="content-container service-list">
          {services.servicesList.map((service, i) => (
            <li key={i} className="service-list__item" data-scroll>
              <div className="service-list__item__wrapper">
                <h3>{service.title}</h3>
                <p>{service.excerpt}</p>
                <Link href={`services/${service.slug}`}>learn more</Link>
              </div>
              <Link href="/contact" className="btn-ellipse">
                LET’S DISCUSS
              </Link>
            </li>
          ))}
        </ul>
      </StyledServiceList>
    </MouseFollowProvider>
  );
}
