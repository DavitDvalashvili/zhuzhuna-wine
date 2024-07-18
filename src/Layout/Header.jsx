import logo from "./../../public/images/logo.svg";
import useWindowWidth from "./../hooks/useWindowWidth.jsx";
import ThemeSwitcher from "../components/header/ThemeSwitcher.jsx";
import LanguageSwitcher from "../components/header/LanguageSwitcher.jsx";

const Header = () => {
  const width = useWindowWidth();

  return (
    <header className="bg-backgroundColor-dark-backgroundCol px-[20px] pt-[40px] pb-[10px] flex justify-between">
      <img className="w-[45px] h-[45px] " src={logo} alt="logo" />
      <div className="text-color-primary text-[24px] mr-[42px]">
        <ThemeSwitcher />
        <LanguageSwitcher />
        {width > 751 ? (
          <button className=" font-tommaso cursor-pointer">მენიუ</button>
        ) : (
          <button className="font-odibeeSans">MENU</button>
        )}
      </div>
    </header>
  );
};

export default Header;
