/* eslint-disable react/no-unescaped-entities */
import {
  // FaTelegramPlane,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div className="bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm pt-10 md:pt-20">
      <div className="md:max-w-[85%] mx-auto px-4 pb-12 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:gap-6"
          >
            <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
              Let's build your <br />
              <span className="text-primary italic">next big idea.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
              Open for collaborations and interesting projects.
            </p>
            <a
              href="mailto:mstafawahed1@gmail.com"
              target="_blank"
              className="w-fit px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95"
            >
              Start a Conversation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                Icon: FaLinkedin,
                label: "LinkedIn",
                username: "mustafa-waheed",
                href: "https://www.linkedin.com/in/mustafa-waheed-b42a02203",
                color: "bg-[#0077B5]/10 text-[#0077B5]",
              },
              {
                Icon: FaGithub,
                label: "GitHub",
                username: "mustafa-waheed",
                href: "https://www.github.com/mwh2000",
                color:
                  theme === "light"
                    ? "bg-[#1f2328]/10 text-[#1f2328]"
                    : "bg-[#ffffff]/10 text-[#ffffff]",
              },
              {
                Icon: FaWhatsapp,
                label: "WhatsApp",
                username: "+964 773 360 8808",
                href: "https://wa.me/9647733608808",
                color: "bg-[#075E54]/10 text-[#075E54]",
              },
              {
                Icon: FaInstagram,
                label: "Instagram",
                username: "@n__9k",
                href: "https://www.instagram.com/n__9k/",
                color: "bg-[#cd486b]/10 text-[#cd486b]",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className="group flex items-center gap-4 p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300"
              >
                <div
                  className={`p-3 rounded-2xl ${social.color} dark:bg-slate-800/50 group-hover:scale-110 transition-transform`}
                >
                  <social.Icon className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500">
                    {social.label}
                  </span>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                    {social.username}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="border-t border-slate-100 dark:border-slate-800 py-10">
        <div className="md:max-w-[85%] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-babylonica text-3xl font-bold text-primary">
            Mustafa
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} — Built with passion by Mustafa
          </p>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500">
              Available for Work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
