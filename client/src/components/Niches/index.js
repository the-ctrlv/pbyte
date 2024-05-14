import { StyledNiches } from './styles';

export default function Niches({ niches }) {
  return (
    <StyledNiches className="section-dark">
      <div className="content-container niches">
        <span className="niches__pre-title" data-scroll>
          We have already worked with such niches
        </span>
        <div className="niches__wrapper" data-scroll>
          {niches?.map((niche, i) => (
            <span key={i} className="niches__wrapper__item">
              {niche}
            </span>
          ))}
        </div>
      </div>
    </StyledNiches>
  );
}
