import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[85%] mx-auto gap-10 md:gap-6 px-4 py-8">
        <div className="text-xl">
          <p>
            Let's make something amazing together start by{" "}
            <a
              href="mailto:asasimr55@gmail.com"
              target="_blank"
              className="text-red-400 font-bold underline"
            >
              saying hi
            </a>
          </p>
        </div>
        <div className="flex gap-8 flex-col md:flex-wrap md:flex-row justify-self-start md:justify-self-center items-start">
          <a
            href="https://t.me/mwhmustafa"
            target="_blank"
            className="flex gap-3 items-center"
          >
            <FaTelegramPlane className="w-8 h-8 rounded-full m-auto p-2 bg-[#0088cc] fill-white group-hover:scale-110 transition-all" />
            <span className="text-primary">@mwhmustafa</span>
          </a>
          <a
            href="https://wa.me/9647733608808"
            target="_blank"
            className="flex gap-3 items-center"
          >
            <FaWhatsapp className="w-8 h-8 rounded-full m-auto p-2 bg-[#075E54] fill-white group-hover:scale-110 transition-all" />
            <span className="text-primary">+964 773 360 8808</span>
          </a>
          <a
            href="https://www.instagram.com/n__9k/"
            target="_blank"
            className="flex gap-3 items-center"
          >
            <FaInstagram className="w-8 h-8 rounded-full m-auto p-2 bg-[#cd486b] fill-white group-hover:scale-110 transition-all" />
            <span className="text-primary">@n__9k</span>
          </a>
        </div>
      </div>
      <div className="w-[85%] bg-primary h-[1px] opacity-20 m-auto"></div>
      <footer className=" border-b-8 border-primary text-center text-white p-4">
        <p>
          Made with ❤️ by{" "}
          <span className="text-primary font-bold">Mustafa</span>
        </p>
      </footer>
    </>
  );
}
