import { useState } from "react";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// eslint-disable-next-line no-unused-vars
import { CustomButton } from "./../../components/";
import data from "./../data.json";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const showModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-6 flex flex-col gap-8 md:max-w-[85%] mx-auto">
      <p className="text-3xl font-bold">My latest works</p>
      <div>
        <Swiper
          loop={false}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 30 },
            512: { slidesPerView: 2.2, spaceBetween: 15 },
            765: { slidesPerView: 4.2, spaceBetween: 30 },
          }}
          freeMode={false}
        >
          {data.projects.map((project, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <img
                src={project["main-image"]}
                alt={project["name"]}
                className="h-64 rounded-2xl object-cover"
                onClick={
                  project.images?.length ? () => showModal(project) : undefined
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal
        title={currentProject["name"]}
        open={modalOpen}
        onCancel={handleClose}
        footer={() =>
          currentProject.url && (
            <div>
              <CustomButton
                onClick={() => window.open(currentProject.url, "_blank")}
                target="_blank"
              >
                Visit
              </CustomButton>
            </div>
          )
        }
        // onCancel={handleClose}
      >
        <div className="flex flex-col gap-4">
          <p>{currentProject.description}</p>
          <div>
            <Swiper loop={false} slidesPerView={1.2} spaceBetween={20}>
              {currentProject.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={currentProject["name"]}
                    className="h-72 w-full rounded-2xl object-fill"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Modal>
    </div>
  );
}
