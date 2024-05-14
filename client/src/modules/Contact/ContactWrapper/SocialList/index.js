import Image from 'next/image';
import { MOCK_SOCIAL_LIST } from './helpers';
import { StyledSocialList } from './styles';

export default function SocialList() {
  return (
    <StyledSocialList className="social-list">
      {MOCK_SOCIAL_LIST.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-list__item"
        >
          <Image
            src={`/assets/icons/socials/${social.name}.svg`}
            alt={social.name}
            width={24}
            height={24}
          />
        </a>
      ))}
    </StyledSocialList>
  );
}
