import Image from 'next/image';
import Link from 'next/link';
import { StyledWorks } from './styles';

export default function Works({ projects }) {
  return (
    <StyledWorks className="section-dark" data-scroll>
      <div className="content-container">
        {projects.map(
          (work) =>
            work.hasCaseStudy && (
              <Link href={`/portfolio/${work.slug}`} key={work.id}>
                <Image
                  src={work.coverImage.url}
                  alt={work.coverImage.altText}
                  width={100}
                  height={100}
                  unoptimized
                />
                <div className="text">
                  <span>{work.client}</span>
                  {/* <span>{work.overview}</span> */}
                </div>
              </Link>
            )
        )}
      </div>
      <p>More Case Studies Coming Soon!</p>
    </StyledWorks>
  );
}
