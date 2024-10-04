import Image from "next/image";

import { SwiperSlide } from "swiper/react";

type Props = {
  image: string;
  alt: string;
};

const HomeSliderMap = ({ image, alt }: Props) => {
  return (
    <SwiperSlide>
      <Image src={image} alt={alt} width={100} height={100} />
    </SwiperSlide>
  );
};

export default HomeSliderMap;
