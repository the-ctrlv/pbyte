import Image from 'next/image';

import { StyledClients } from './styles';

export default function Clients() {
  return (
    <StyledClients className="section-light">
      <div className="content-container clients">
        <span className="clients__pre-title" data-scroll>
          We are proud to show you
        </span>
        <h2 className="clients__title" data-scroll>
          Our clients
        </h2>
        {/* Placeholder */}
        <div className="clients__logos-wrapper">
          <Image
            src="https://cdn.sanity.io/images/vanqukwj/production/2f8600ca229f6117e76e00f2c93df7377887ed68-303x100.svg"
            alt="TeamDCR"
            width={100}
            height={100}
            data-scroll
          />
          <Image
            src="https://cdn.sanity.io/images/vanqukwj/production/551fd0b417d133a267812ad3d3d7b576fc82516e-125x100.svg"
            alt="Postage Health"
            width={100}
            height={100}
            data-scroll
          />
          <Image
            src="https://cdn.sanity.io/images/vanqukwj/production/5dbcaf741160d212b801f81fe125181e5a54c74a-247x100.svg"
            alt="OHBHS"
            width={100}
            height={100}
            data-scroll
          />
          <Image
            src="https://cdn.sanity.io/images/vanqukwj/production/21c822b062f9632ec41c7deaeba584743561ce6d-458x100.svg"
            alt="Salter Med"
            width={100}
            height={100}
            data-scroll
          />
          <Image
            src="https://cdn.sanity.io/images/vanqukwj/production/1f12695e3107a3c6c4cdb4ac9b6509b88480cbaa-93x100.svg"
            alt="Lab Services"
            width={100}
            height={100}
            data-scroll
          />{' '}
          <Image
            src="https://cdn.sanity.io/images/vanqukwj/production/5a785adf59f7201a6e6bb58b6ee37eb33fd05672-1138x100.svg"
            alt="PolicySmart"
            width={100}
            height={100}
            data-scroll
          />
          <Image
            src="https://cdn.sanity.io/images/vanqukwj/production/efdd5f5ba76b5836626c4fd349981e25288c099c-325x100.svg"
            alt="Seamless Turf"
            width={100}
            height={100}
            data-scroll
          />
          <Image
            src="https://cdn.sanity.io/images/vanqukwj/production/90e1df8462ebd66d2526593a319495df2e4d1388-105x100.svg"
            alt="Trainstation"
            width={100}
            height={100}
            data-scroll
          />
          <Image
            src="https://cdn.sanity.io/images/vanqukwj/production/801e3cd1d9174bb50bf58bd9b062acd553b0f0c3-85x100.svg"
            alt="Doc Lab Inc"
            width={100}
            height={100}
            data-scroll
          />{' '}
        </div>
      </div>
    </StyledClients>
  );
}
