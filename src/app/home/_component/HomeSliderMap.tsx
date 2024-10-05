import Image from "next/image";
import { SwiperSlide } from "swiper/react";

type Props = {
  image: string;
  alt: string;
};

const HomeSliderMap = ({ image, alt }: Props) => {
  return (
    <SwiperSlide className={"w-full h-full"}>
      <Image
        src={image}
        alt={alt}
        fill={true}
        className={"object-fill rounded-md"}
      />
    </SwiperSlide>
  );
};

export default HomeSliderMap;
