import Image from 'next/image';
import MouseFollowProvider from '../MouseFollowProvider';
import { StyledPhones } from './styles';

export default function Phones({ theme, isExpanded }) {
  return (
    <StyledPhones className={isExpanded && 'expanded'}>
      <MouseFollowProvider theme={theme}>
        <div className="container">
          {!isExpanded && (
            <Image
              // eslint-disable-next-line prettier/prettier
              src={`/assets/images/${theme}-phones.png`}
              alt={theme}
              width={500}
              height={100}
              unoptimized
            />
          )}
        </div>
      </MouseFollowProvider>
      {isExpanded && (
        <div className="phones-wrapper">
          <Image
            src={`/assets/images/${theme}-phones-expanded.png`}
            alt={theme}
            width={500}
            height={100}
            unoptimized
          />
          <Image
            src={`/assets/images/${theme}-phones-expanded-2.png`}
            alt={theme}
            width={500}
            height={100}
            unoptimized
          />
        </div>
      )}
    </StyledPhones>
  );
}
