import { Swiper, SwiperSlide } from "swiper/react";
import { FaFigma, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPhp } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// eslint-disable-next-line no-unused-vars
import { CustomButton } from "../../components";
import data from "./../data.json";

const iconMapping = {
  Figma: FaFigma,
  React: FaReact,
  Tailwind: RiTailwindCssFill,
  php: DiPhp,
  api: TbApi,
  javascript: DiJavascript1,
  // Add other mappings as needed
};

export default function Skills() {
  return (
    <div className="p-6 flex flex-col gap-8 md:max-w-[85%] mx-auto">
      <p className="text-3xl font-bold">Skills</p>
      <div>
        <Swiper
          loop={false}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 10 },
            512: { slidesPerView: 4, spaceBetween: 10 },
            765: { slidesPerView: 6, spaceBetween: 10 },
          }}
          freeMode={false}
        >
          {data.skills.map((skill, index) => {
            const IconComponent = iconMapping[skill.name]; // Get the correct icon component

            return (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="group w-24 h-24 bg-secondary text-primary border-2 border-primary border-opacity-5 p-2 rounded-full content-center">
                  {IconComponent && (
                    <IconComponent className="w-12 h-12 m-auto fill-primary md:group-hover:scale-110 transition-all" />
                  )}{" "}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
