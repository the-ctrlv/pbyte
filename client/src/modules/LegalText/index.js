import { PortableText } from '@portabletext/react';
import { parseISO, format } from 'date-fns';
import MouseFollowProvider from 'components/MouseFollowProvider';
// import { StyledSelect } from 'components/Select/styles';
import { StyledLegalDoc } from './styles';

function PortableTextBlock({ body }) {
  return <PortableText value={body} />;
}

export default function LegalText({ legalText }) {
  const date = parseISO(legalText?.updatedAt);
  const updatedDate = format(date, 'LLL d, yyyy');

  return (
    <MouseFollowProvider theme="light">
      <StyledLegalDoc className="section-light">
        <div className="content-container content">
          <div className="content__left">
            <h1 data-scroll>{legalText.title}</h1>
            <p data-scroll>
              <strong>Last updated: </strong>
              {updatedDate}
            </p>
          </div>
          <div className="content__right text-wrapper">
            <PortableTextBlock body={legalText.body} />
          </div>
        </div>
      </StyledLegalDoc>
    </MouseFollowProvider>
  );
}
