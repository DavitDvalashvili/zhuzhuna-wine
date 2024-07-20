import { useLanguage } from "../../context/languageContext";
import geo from "/icons/ge.svg";
import eng from "/icons/us.svg";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-col items-center gap-[16px] mt-[20px] lg:mt-[0px] lg:gap-[12px] lg:flex-row">
      <img
        className={`w-[23px] border-[2px] border-solid ${
          language === "GE" ? "border-[#BB8DF5]" : "border-[transparent]"
        } rounded-[3px] cursor-pointer`}
        src={geo}
        onClick={() => {
          setLanguage("GE");
        }}
        alt="Georgian"
      />

      <img
        className={`w-[23px] border-[2px] border-solid ${
          language === "EN" ? "border-[#BB8DF5]" : "border-[transparent]"
        } rounded-[3px] cursor-pointer`}
        src={eng}
        onClick={() => {
          setLanguage("EN");
        }}
        alt="English"
      />
    </div>
  );
};

export default LanguageSwitcher;
