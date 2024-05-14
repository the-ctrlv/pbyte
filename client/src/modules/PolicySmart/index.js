import Image from 'next/image';

import { StyledPolicySmartContent } from './styles';

export function PolicySmartContent() {
  return (
    <StyledPolicySmartContent>
      <div className="content-container">
        <Image
          src="/assets/images/policy-smart.png"
          alt="Policy Smart"
          width={100}
          height={100}
          unoptimized
        />
      </div>
    </StyledPolicySmartContent>
  );
}
