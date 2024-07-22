import logo from "/images/logo.svg";
import useWindowWidth from "./../hooks/useWindowWidth.jsx";
import ThemeSwitcher from "../components/header/ThemeSwitcher.jsx";
import { useLanguage } from "../context/languageContext.jsx";
import NavBar from "../components/header/NavBar.jsx";
import { useState } from "react";

const Header = () => {
  const width = useWindowWidth();
  const { language } = useLanguage();
  const [showNav, setShowNav] = useState(false);

  return (
    <header className=" bg-backgroundColor-dark-backgroundCol px-[20px] pt-[40px] pb-[10px] flex items-center gap-[15px]  xl:px-[72px]  xl:py-[11px]">
      <img className="w-[45px] h-[45px] mr-auto" src={logo} alt="logo" />
      {showNav || width > 1024 ? <NavBar setShowNav={setShowNav} /> : ""}
      <div className="text-color-primary text-[24px] mr-[42px] ">
        {width < 1024 && (
          <button
            className=" font-tommaso cursor-pointer"
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            {language == "GE" ? "მენიუ" : "MENU"}
          </button>
        )}
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
