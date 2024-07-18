import logo from "./../../public/images/logo.svg";
import useWindowWidth from "./../hooks/useWindowWidth.jsx";
import ThemeSwitcher from "../components/header/ThemeSwitcher.jsx";
import LanguageSwitcher from "../components/header/LanguageSwitcher.jsx";

const Header = () => {
  const width = useWindowWidth();

  return (
    <header className="bg-backgroundColor-dark-backgroundCol px-[20px] pt-[40px] pb-[10px] flex items-center justify-end gap-[15px]">
      <img className="w-[45px] h-[45px] mr-auto" src={logo} alt="logo" />
      <ThemeSwitcher />
      <LanguageSwitcher />
      <div className="text-color-primary text-[24px] mr-[42px]">
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
