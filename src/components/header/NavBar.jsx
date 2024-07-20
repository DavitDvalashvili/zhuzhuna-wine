import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../../context/languageContext";

const NavBar = () => {
  const { language } = useLanguage();

  return (
    <nav className="px-[10px] py-[16px] bg-buttonColor-primary absolute top-[85px] right-[32px] w-[156px] text-color-primary font-arialgeo lg:static lg:p-0 lg:w-[780px] lg:flex lg:bg-transparent ">
      <ul className="flex flex-col gap-[20px] text-[16px]  items-center xl:gap-[40px]  lg:flex-row lg:mr-auto xl:ml-[-222px]">
        <li className="leading-[18px] cursor-pointer">
          {language === "GE" ? "ჩვენ შესახებ" : "About Us"}
        </li>
        <li className="leading-[18px] cursor-pointer">
          {language === "GE" ? "სიახლეები" : "News"}
        </li>
        <li className="leading-[18px] cursor-pointer">
          {language === "GE" ? "ბოთლი" : "Bottle"}
        </li>
        <li className="leading-[18px] cursor-pointer">
          {language === "GE" ? "კოქტეილები" : "Cocktails"}
        </li>
        <li className="leading-[18px] cursor-pointer">
          {language === "GE" ? "მობილური ბარი" : "Mobile Bar"}
        </li>
        <li className="leading-[18px] cursor-pointer">
          {language === "GE" ? "კონტაქტი" : "Contact"}
        </li>
      </ul>
      <LanguageSwitcher />
    </nav>
  );
};

export default NavBar;
