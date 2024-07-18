import { useLanguage } from "../../context/languageContext";
import geo from "./../../../public/icons/georgian.svg";
import eng from "./../../../public/icons/english.svg";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage("GE");
  console.log(language);

  return (
    <div className="cursor-pointer">
      {language === "EN" && (
        <img
          src={geo}
          onClick={() => {
            setLanguage("GE");
          }}
          alt="Georgian"
        />
      )}
      {language === "GE" && (
        <img
          src={eng}
          onClick={() => {
            setLanguage("EN");
          }}
          alt="English"
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
