import { useState } from "react";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { motion } from "framer-motion";
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
    <div className="p-6 md:p-12 flex flex-col gap-8 md:gap-12 md:max-w-[85%] mx-auto mt-8 md:mt-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2"
      >
        <h2 className="text-4xl md:text-4xl font-black text-slate-900 dark:text-white">
          Featured <span className="text-primary italic">Works</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-lg">
          A collection of projects where functionality meets design. Each one
          built with care and precision.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Swiper
          loop={false}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 15 },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 },
            1280: { slidesPerView: 4.1, spaceBetween: 24 },
          }}
          className="pb-8 md:pb-12"
        >
          {data.projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                // whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 cursor-pointer"
                onClick={
                  project.images?.length ? () => showModal(project) : undefined
                }
              >
                <div className="h-64 md:h-72 overflow-hidden bg-slate-50 dark:bg-slate-800">
                  <img
                    src={project["main-image"]}
                    alt={project["name"]}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
                  <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
                    {project["name"]}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      View Project
                    </span>
                    <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      →
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <Modal
        title={null}
        open={modalOpen}
        onCancel={handleClose}
        footer={null}
        width={700}
        centered
        className="modern-modal"
      >
        <div className="flex flex-col gap-6 p-4 md:p-6 bg-white dark:bg-slate-900 transition-colors rounded-3xl">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              {currentProject["name"]}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-md leading-relaxed">
              {currentProject.description}
            </p>
          </div>

          <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-slate-800">
            <Swiper
              loop={false}
              slidesPerView={1}
              spaceBetween={0}
              pagination={{ clickable: true }}
            >
              {currentProject.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-64 md:h-[400px] w-full overflow-hidden flex items-center justify-center bg-slate-100 dark:bg-slate-900">
                    {/* Blurred Background */}
                    <img
                      src={image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 dark:opacity-20 scale-110"
                      aria-hidden="true"
                    />
                    {/* Main Image */}
                    <img
                      src={image}
                      alt={currentProject["name"]}
                      className="relative z-10 max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex flex-wrap self-end items-center justify-between gap-4 mt-2">
            <div>
              {currentProject["in-progress"] && (
                <div className="flex items-center gap-2 px-4 py-2 bg-sky-50 dark:bg-sky-900/20 rounded-xl border border-sky-100 dark:border-sky-800/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-sky-600 dark:text-sky-400">
                    Project in Progress
                  </span>
                </div>
              )}
            </div>

            {currentProject.url && (
              <button
                onClick={() => window.open(currentProject.url, "_blank")}
                className="px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark dark:hover:bg-primary-light transition-all transform hover:scale-105 active:scale-95"
              >
                Visit Live Site
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
