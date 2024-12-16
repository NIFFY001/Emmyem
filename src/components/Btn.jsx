import { Link } from "react-router-dom";

function Btn({ children, to, target }) {
  return (
    <Link
      to={to}
      target={target}
      className="flex items-center gap-2 bg-[#A62429] font-semibold text-white md:font-bold rounded-md h-[47px] px-8 text-[12px] md:text-[15px] w-auto justify-center boxShadow hover:bg-[#750C10] hover:text-[#f7f7f7f7]"
    >
      {children}
    </Link>
  );
}

export default Btn;
