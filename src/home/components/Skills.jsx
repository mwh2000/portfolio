import { FaFigma, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPhp, DiJavascript1 } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { BiLogoFlutter } from "react-icons/bi";
import { motion } from "framer-motion";

const skillsConfig = {
  Flutter: {
    Icon: BiLogoFlutter,
    color: "text-[#5fc9f8]",
    bg: "bg-[#5fc9f8]/10",
  },
  React: { Icon: FaReact, color: "text-[#087ea4]", bg: "bg-[#087ea4]/10" },
  Tailwind: {
    Icon: RiTailwindCssFill,
    color: "text-[#00a6f4]",
    bg: "bg-[#00a6f4]/10",
  },
  Figma: { Icon: FaFigma, color: "text-[#ea4c1d]", bg: "bg-[#ea4c1d]/10" },
  php: { Icon: DiPhp, color: "text-[#4f5b93]", bg: "bg-[#4f5b93]/10" },
  javascript: {
    Icon: DiJavascript1,
    color: "text-[#F7DF1E]",
    bg: "bg-[#F7DF1E]/10",
  },
  laravel: {
    Icon: FaLaravel,
    color: "text-[#f53003]",
    bg: "bg-[#f53003]/10",
  },
  api: { Icon: TbApi, color: "text-primary", bg: "bg-primary/10" },
};

export default function Skills() {
  return (
    <div className="p-6 md:p-12 flex flex-col gap-8 md:gap-10 md:max-w-[85%] mx-auto pb-16 md:pb-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2"
      >
        <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">
          Capabilities
        </p>
        <h2 className="text-4xl font-black text-slate-900 dark:text-white">
          Tech <span className="text-primary italic">Stack</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
          {Object.entries(skillsConfig).map(([name, config], i) => {
            const IconComponent = config.Icon;
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`group flex flex-col items-center gap-4 cursor-pointer`}
                >
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 ${config.bg} rounded-3xl flex items-center justify-center transition-all duration-300`}
                  >
                    <IconComponent
                      className={`text-4xl md:text-4xl ${config.color} transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors`}
                  >
                    {name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
