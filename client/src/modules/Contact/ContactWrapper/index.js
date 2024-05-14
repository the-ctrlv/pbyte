import ContactForm from 'components/Contact';
import MouseFollowProvider from 'components/MouseFollowProvider';

import SocialList from './SocialList';

import { StyledContactWrapper } from './styles';

export default function ContactWrapper() {
  return (
    <MouseFollowProvider theme="dark">
      <StyledContactWrapper className="section-dark">
        <div className="content-container contact-wrapper">
          <div className="contact-wrapper__left">
            <span className="contact-wrapper__pre-title">
              Ready to Make Your Idea Come to Life?
            </span>
            <h1 className="contact-wrapper__title">Let’s get in touch</h1>
            <SocialList />
          </div>
          <div className="contact-wrapper__right">
            <ContactForm theme="dark" />
          </div>
        </div>
      </StyledContactWrapper>
    </MouseFollowProvider>
  );
}
