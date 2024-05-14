import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { StyledTitleSwiper } from './styles';

export default function TitleSlider({ slideIndex, slideChangeDirection }) {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (slideChangeDirection === 'next') {
      swiper?.slideNext();
    } else if (slideChangeDirection === 'prev') {
      swiper?.slidePrev();
    }
  }, [slideChangeDirection, swiper, slideIndex]);

  return (
    <StyledTitleSwiper
      slidesPerView={1}
      touchRatio={0}
      initialSlide={0}
      loop
      direction="vertical"
      onSwiper={(s) => {
        setSwiper(s);
      }}
    >
      <SwiperSlide className="title-slide">
        <h2 className="title-slide__title">Embrace the Digital Frontier</h2>
        <p className="title-slide__description">
          In the constantly evolving world of technology, we believe in
          embracing the digital frontier to uncover new opportunities. Our
          mission is to harness the full potential of cutting-edge technology,
          transforming businesses and driving innovation.
        </p>
      </SwiperSlide>
      <SwiperSlide className="title-slide">
        <h2 className="title-slide__title">Harmonize vision and strategy</h2>
        <p className="title-slide__description">
          We craft our methodology around your unique needs, aligning your
          vision and goals with our innovative solutions. This harmonious
          approach ensures a seamless and efficient journey, propelling your
          business towards success and growth.
        </p>
      </SwiperSlide>
      <SwiperSlide className="title-slide">
        <h2 className="title-slide__title">Assemble your dream team</h2>
        <p className="title-slide__description">
          At the heart of our success is a team of passionate innovators,
          experts, and visionaries. We bring together the brightest minds,
          fostering collaboration and creativity, to deliver exceptional results
          and exceed expectations.
        </p>
      </SwiperSlide>
      <SwiperSlide className="title-slide">
        <h2 className="title-slide__title">
          Bespoke technological solutions & strategies
        </h2>
        <p className="title-slide__description">
          Understanding that each business is unique, we create tailor-made
          solutions that address your specific challenges and objectives. Our
          approach ensures that you receive the most effective and relevant
          technology strategies to transform your business.
        </p>
      </SwiperSlide>
      <SwiperSlide className="title-slide">
        <h2 className="title-slide__title">Stay ahead of the curve</h2>
        <p className="title-slide__description">
          In the rapidly changing landscape of technology, staying ahead of the
          curve is crucial for long-term success. We constantly explore emerging
          trends and advancements, equipping your business with the tools and
          insights needed to thrive in an ever-evolving marketplace.
        </p>
      </SwiperSlide>
      <SwiperSlide className="title-slide">
        <h2 className="title-slide__title">Elevate your business</h2>
        <p className="title-slide__description">
          Our vision is to elevate your business by leveraging the power of
          technology. With our expertise, dedication, and creative
          problem-solving, we help you soar to new heights, unlocking new levels
          of growth and success.
        </p>
      </SwiperSlide>
    </StyledTitleSwiper>
  );
}
