import logo from "/images/logo.svg";
import instagram from "/icons/instagram.svg";
import facebook from "/icons/facebook.svg";
import linkedIn from "/icons/linkedIn.svg";
import { useLanguage } from "../context/languageContext.jsx";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-color-black py-[20px] px-[24px] lg:px-[80px]">
      <div className="flex flex-row gap-[20px] lg:gap-[64px]">
        <img className="w-[45px] h-[45px] " src={logo} alt="logo" />
        <div className="text-color-primary text-[10px] sm:text-[12px]  lg:text-[16px] lg:leading-[18px] flex flex-col gap-[16px] lg:gap-[18px]">
          <p className="flex flex-col gap-[12px]">
            <span>{language === "GE" ? "ტელეფონი:" : "Phone number"}</span>
            <a href="tel:+995579760006">+995 579 76 00 06</a>
          </p>
          <p className="flex flex-col gap-[12px]">
            {language === "GE" ? "ელ.ფოსტა:" : "Email"}
            <a href="mailto:Hello@jujuna.ge">Hello@jujuna.ge</a>
          </p>
          <p className="flex flex-col gap-[12px]">
            {language === "GE" ? "მისამართი:" : "Address"}
            <a href="https://maps.app.goo.gl/aYMAvtLq6vYTaHos9" target="_blank">
              {language === "GE"
                ? "ნინოშვილი #8 თბილისი,საქართველო"
                : "#8 Ninoshvili Street, Tbilisi, Georgia"}
            </a>
          </p>
        </div>
        <div className="ml-auto mt-auto flex flex-row ">
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="cursor-pointer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="cursor-pointer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="cursor-pointer"
          >
            <img src={linkedIn} alt="linkedIn" />
          </a>
        </div>
      </div>
      <div className="text-[8px] sm:text-[10px] text-[#908F8F]  mt-[32px] lg:mt-[5px] lg:mr-[5px] flex gap-[10px] sm:gap-[20px] justify-end">
        <a href="https://pdps.ge/ka" target="_blank">
          {language === "GE"
            ? "პერსონალური მონაცემების დაცვის პოლიტიკა"
            : "Personal Data Protection Policy"}
        </a>
        <a href="https://police.ge/ge/lepl/lepl112" target="_blank">
          {language === "GE" ? "უსაფრთხოების ცენტრი" : "Security Center"}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
