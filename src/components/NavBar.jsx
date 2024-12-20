import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { CiPhone } from "react-icons/ci";

function NavBar() {
  const [scrolling, setScrolling] = useState(true);
  const [isListVisible, setListVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolling(window.scrollY === 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleIconWithDelay = () => {
    setOpen(!open);

    setTimeout(() => {
      setOpen(!open);
    }, 300);
  };

  const handleNavLinkClick = () => {
    setOpen(false);
  };

  const toggleListVisibility = () => {
    setListVisible(true);
  };
  const notToggleListVisibility = () => {
    setListVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="sticky top-0 bg-white z-50 border-b border-slate-200"
      id="navBar"
      style={{
        boxShadow: scrolling ? "0px 3px 4px rgba(54, 102, 70, 0.24)" : "none",
      }}
    >
      <div className="bg-white px-[20px] md:px-[50px]">
        <div className="flex items-center justify-between container-w m-auto">
          {/* Left Section: Logo */}
          <div className="flex items-center gap-3 md:gap-8">
            <div className="relative">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-[70px] md:h-[80px] my-2"
                />
              </Link>
            </div>
          </div>

          {/* Right Section: Menu Toggle */}
          <button
            className="p-0 border-none outline-none focus:outline-none lg:hidden hover:shadow-none"
            onClick={toggleIconWithDelay}
          >
            {open ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
          </button>

          {/* Navigation/Menu */}
          <nav
            className={`${
              open
                ? "absolute top-0 left-0 px-10 opacity-100 h-screen w-full overflow-y-auto bg-white"
                : "hidden lg:flex opacity-0 lg:opacity-100 h-auto"
            } lg:flex items-center gap-5`}
          >
            <button
              className="p-0 border-none outline-none focus:outline-none lg:hidden flex items-end justify-end w-full mt-7 mb-10 hover:shadow-none"
              onClick={() => setOpen(!open)}
            >
              <IoMdClose color="#4E4A42" size={25} />
            </button>

            <ul className="flex flex-col lg:flex-row gap-5 lg:items-center">
              {data.map((link) => (
                <li
                  key={link.name}
                  onMouseEnter={
                    link.name === "COMPANY" ? toggleDropdown : undefined
                  }
                  onMouseLeave={
                    link.name === "COMPANY" ? hideDropdown : undefined
                  }
                >
                  <NavLink
                    to={link.link}
                    onClick={handleNavLinkClick}
                    className={({ isActive }) =>
                      `font-bold lg:font-semibold text-[20px] md:text-[30px] lg:text-[12px] xl:text-[14px] lg:uppercase ${
                        isActive
                          ? "pb-2 border-b border-transparent hover:border-[#3B2F2A] text-black lg:text-black"
                          : "text-black"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>

                  {/* Dropdown Logic */}
                  {link.name === "COMPANY" && isDropdownVisible && (
                    <div className="hidden absolute w-full bg-transparent text-white shadow-md top-18 left-0 lg:flex flex-col z-10  ">
                      <div className="flex flex-row py-10 px-20 gap-20  mt-8 backdrop-blur-sm">
                        <div className="flex flex-col justify-center font-bold text-[40px]">
                          <h1 className="mb-4">Company</h1>
                        </div>
                        <ul className="flex flex-row items-start leading-[3] gap-40">
                          {companyDropdown.map((company) => (
                            <li key={company.name}>
                              {company.Items && (
                                <ul className="mt-2 pl-5">
                                  {company.Items.map((Item) => (
                                    <li key={Item.name}>
                                      <NavLink
                                        to={Item.link}
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                          `text-white ${
                                            isActive
                                              ? "font-semibold border-b-2"
                                              : "text-black"
                                          }`
                                        }
                                      >
                                        {Item.name}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {link.name === "COMPANY" && open && (
                    <ul className="lg:hidden pl-5 mt-2">
                      {companyDropdown.map((company) => (
                        <li key={company.name} className="">
                          {company.Items &&
                            company.Items.map((Item) => (
                              <NavLink
                                onClick={handleNavLinkClick}
                                key={Item.name}
                                to={Item.link}
                                className={({ isActive }) =>
                                  `block py-3 font-medium ${
                                    isActive
                                      ? "text-[#A22228] font-semibold"
                                      : "text-black"
                                  }`
                                }
                              >
                                {Item.name}
                              </NavLink>
                            ))}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Contact Us: Mobile */}
            <div className="lg:hidden mt-5">
              <Link className="flex items-center gap-2 bg-[#3B2F2A] font-semibold text-white rounded-md h-[47px] px-4 text-[12px] justify-center ">
                <span>CONTACT US</span>
                <CiPhone size={20} />
              </Link>
            </div>
          </nav>

          {/* Contact Us: Desktop */}
          <div className="hidden lg:flex">
            <Link
              onMouseLeave={notToggleListVisibility}
              onMouseEnter={toggleListVisibility}
              className="flex items-center gap-2 bg-[#3B2F2A] font-semibold text-white rounded-md h-[47px] px-4 text-[12px] md:text-[15px] justify-center "
            >
              <span>CONTACT US</span>
              <CiPhone size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

const data = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "COMPANY",
    link: "",
  },
  {
    name: "SUBSTAINABILITY",
    link: "",
  },
  {
    name: "SERVICES",
    link: "",
  },
];

const companyDropdown = [
  {
    Items: [
      { name: "About Us", link: "/services/asset-management" },
      { name: "Management Team", link: "/services/real-estate" },
      { name: "", link: "/services/leasing" },
    ],
  },
  {
    Items: [
      { name: "", link: "/services/registrars" },
      { name: "", link: "/services/trusteeship" },
      { name: "", link: "/services/capital" },
    ],
  },
  {
    Items: [{ name: "", link: "/services/securities" }],
  },
];

const portal = [
  {
    name: "Asset Management Portal",
    link: "https://online.samtlng.com/symbols/f?p=1600:109",
  },
  {
    name: "AAML Portal",
    link: "https://aam9274p.neuappx.com/ords/f?p=500:LOGIN_DESKTOP:16759925523734:::::",
  },
  {
    name: "Open Account",
    link: "https://apply.samtlng.com/",
  },
];
