import { motion } from "framer-motion";
import data from "./../data.json";

export default function Partners() {
  const partners = data["Success-partners"] || [];
  const duplicated = [...partners, ...partners, ...partners];

  return (
    <div className="py-12 md:py-20 flex flex-col gap-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-6 md:px-12 md:max-w-[85%] mx-auto w-full"
      >
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4">
          Success <span className="text-primary italic">Partners</span>
        </h2>
      </motion.div>

      <div className="px-6 md:px-12 md:max-w-[100%] mx-auto w-full">
        <div className="md:max-w-[85%] mx-auto w-full relative">
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-bg dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-bg dark:from-slate-950 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden px-6 md:px-12">
            <div className="flex w-max animate-marquee">
              {duplicated.map((partner, index) => (
                <div
                  key={index}
                  className="mx-4 md:mx-6 h-12 md:h-16 px-4 py-2 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 flex-shrink-0"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-[120px] md:max-w-[160px] object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<span class="text-slate-400 font-bold">${partner.name}</span>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
