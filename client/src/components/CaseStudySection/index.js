import { useRouter } from 'next/router';
import { StyledCaseStudySection } from './styles';

export default function CaseStudySection({
  data,
  resultSection,
  resultTitle,
  resultText,
  section,
  isOverview,
  isResult,
  screens,
  months,
  people,
  children,
  sectionIndex,
}) {
  const router = useRouter();

  return (
    <StyledCaseStudySection
      sectionIndex={sectionIndex}
      className={router.pathname === '/postage-health' && 'postage-theme'}
    >
      <div className="content-container case-study">
        <div className="case-study__left">
          <span className="case-study__left__title numbered">
            {isResult ? resultSection : section}
          </span>
        </div>

        <div className="case-study__right">
          <h2 className="case-study__right__title">
            {isResult ? resultTitle : data.title}
          </h2>
          <p className="case-study__right__text">
            {isResult ? resultText : data.text}
          </p>
          {isOverview && (
            <ul className="case-study__right__list">
              <li className="list-item">
                <div>
                  <span className="list-item__title">Client</span>
                  <span className="list-item__text">{data.client}</span>
                </div>
              </li>
              <li className="list-item">
                <div>
                  <span className="list-item__title">Scope</span>
                  {data.services.map((service) => (
                    <span className="list-item__text" key={service}>
                      {service}
                    </span>
                  ))}
                </div>
              </li>
              <li className="list-item">
                <div>
                  <span className="list-item__title">Link</span>
                  <a
                    href={data.link}
                    className="list-item__text--link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.link}
                  </a>
                </div>
              </li>
            </ul>
          )}
          {isResult && (
            <ul className="result-list">
              <li className="list-item">
                <span className="list-item__title">{screens}</span>
                <span className="list-item__text">pages</span>
              </li>
              <li className="list-item">
                <span className="list-item__title">{months}</span>
                <span className="list-item__text">months</span>
              </li>
              <li className="list-item">
                <span className="list-item__title">{people}</span>
                <span className="list-item__text">people</span>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="content">{children}</div>
    </StyledCaseStudySection>
  );
}
