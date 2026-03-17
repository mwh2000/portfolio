/* eslint-disable react/no-unescaped-entities */
import { BiLogoFlutter } from "react-icons/bi";
import { FaFigma, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

export default function Body() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-0 py-20 overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 w-full md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* Left Side: Name and Greeting */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <motion.span className="text-xl md:text-2xl font-medium text-slate-400 dark:text-slate-500 italic">
              Hey there,
            </motion.span>
            <div className="h-[1px] w-12 bg-slate-200 dark:bg-slate-800 hidden md:block" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-[10rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9] md:leading-[0.8] md:ml-[-5px]"
          >
            I am <br />
            <span className="text-primary italic">Mustafa</span>
          </motion.h1>

          {/* Floating Experience Badge - Hidden on Mobile, Fixed for Desktop */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex items-center gap-4 mt-8 px-6 py-4 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md shadow-xl shadow-slate-200/20 dark:shadow-slate-950/20"
          >
            <span className="text-primary font-black text-4xl">4</span>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 dark:text-slate-500 leading-none mb-1">
                Years of
              </span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                Crafting Digital <br /> Experiences
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Description, Stack, Contact */}
        <div className="md:col-span-5 flex flex-col items-center md:items-end text-center md:text-right gap-12">
          {/* Mobile Experience Badge */}
          <motion.div
            variants={itemVariants}
            className="flex md:hidden items-center gap-3 px-5 py-2 rounded-full border border-slate-100 dark:border-slate-800 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm"
          >
            <span className="text-primary font-black text-xl">4</span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400 dark:text-slate-500 text-left leading-tight">
              Years of <br /> Experience
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md"
          >
            Creating digital experiences that blend{" "}
            <span className="text-slate-900 dark:text-slate-200 font-bold">
              functionality
            </span>{" "}
            with{" "}
            <span className="text-slate-900 dark:text-slate-200 font-bold">
              aesthetic
            </span>{" "}
            excellence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 md:gap-6 justify-center md:justify-end"
          >
            {[
              { Icon: FaFigma, color: "text-[#ea4c1d]", bg: "bg-[#ea4c1d]/5" },
              {
                Icon: BiLogoFlutter,
                color: "text-[#02569B]",
                bg: "bg-[#02569B]/10",
              },
              { Icon: FaReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
              {
                Icon: RiTailwindCssFill,
                color: "text-[#38bdf8]",
                bg: "bg-[#38bdf8]/10",
              },
            ].map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
                className={`text-2xl md:text-3xl ${tech.color} p-4 rounded-2xl ${tech.bg} border border-transparent hover:border-primary/20 transition-all shadow-sm`}
              >
                <tech.Icon />
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-2 group"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black group-hover:text-primary transition-colors">
              Available for projects
            </span>
            <a
              href="mailto:mstafawahed1@gmail.com"
              className="text-xl md:text-2xl font-black text-slate-900 dark:text-white hover:text-primary transition-all decoration-primary/20 hover:decoration-primary underline underline-offset-8"
            >
              mstafawahed1@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
