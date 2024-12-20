import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ValueCard({ icon, title, content, link, bg }) {
  return (
    <Link to={link}>
      <div
        style={{ backgroundColor: bg }}
        className="border items-center shadow-custom text-center px-5 pb-10 pt-5 flex flex-col gap-5 md:hover:scale-y-6 md:hover:-translate-y-4 hover:cursor-pointer rounded-md ease-in-out duration-300 text-white"
      >
        <img src={icon} alt="" className="animation-slide-in-left" />
        <h1 className="pt-2 font-bold text-[20px] animation-slide-in-left">
          {title} <br className="hidden md:block" />
        </h1>
        <p className="text-[15px] animation-slide-in-left">{content}</p>
      </div>
    </Link>
  );
}
