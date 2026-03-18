import { motion } from "framer-motion";

export default function Experiences() {
  const skillsList = [
    {
      title: "Web Programmer",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          className="skills-icon"
        >
          <g fill="currentColor">
            <path d="m240 128l-48 40H64l-48-40l48-40h128Z" opacity={0.2}></path>
            <path d="M69.12 94.15L28.5 128l40.62 33.85a8 8 0 1 1-10.24 12.29l-48-40a8 8 0 0 1 0-12.29l48-40a8 8 0 0 1 10.24 12.3m176 27.7l-48-40a8 8 0 1 0-10.24 12.3L227.5 128l-40.62 33.85a8 8 0 1 0 10.24 12.29l48-40a8 8 0 0 0 0-12.29m-82.39-89.37a8 8 0 0 0-10.25 4.79l-64 176a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 96 224a8 8 0 0 0 7.52-5.27l64-176a8 8 0 0 0-4.79-10.25"></path>
          </g>
        </svg>
      ),
    },
    {
      title: "App Programmer",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="skills-icon"
        >
          <path
            fill="currentColor"
            d="M4.207 13.207l1.586 1.586c.391.391 1.024.391 1.414 0L17.805 4.195C18.246 3.754 17.934 3 17.31 3h-3.896c-.265 0-.52.105-.707.293l-8.5 8.5C3.817 12.183 3.817 12.817 4.207 13.207zM17.31 12h-3.896c-.265 0-.52.105-.707.293l-4 4c-.391.391-.391 1.024 0 1.414l4 4C12.895 21.895 13.149 22 13.414 22h3.896c.624 0 .936-.754.495-1.195l-3.098-3.098c-.391-.391-.391-1.024 0-1.414l3.098-3.098C18.246 12.754 17.934 12 17.31 12z"
          ></path>
        </svg>
      ),
    },
    {
      title: "UI/UX Designer",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="skills-icon"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full mx-auto py-10 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 grid-cols-1 md:max-w-[85%] mx-auto gap-6 md:gap-8"
      >
        {skillsList.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: "rgba(13, 148, 136, 0.3)" }}
            className="flex flex-row gap-5 items-center p-8 border border-white dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-[2rem] shadow-xl shadow-slate-200/20 dark:shadow-slate-950/50 transition-all duration-300"
          >
            <div className="p-4 bg-primary/10 rounded-2xl text-primary text-3xl">
              {skill.icon}
            </div>
            <p className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
