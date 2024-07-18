import { useLanguage } from "../../context/languageContext";
import geo from "./../../../public/icons/georgian.svg";
import eng from "./../../../public/icons/english.svg";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  console.log(`langauge: ${language}`);

  return (
    <div>
      <img
        src={geo}
        onClick={() => {
          setLanguage("GEO");
        }}
        alt="Georgian"
      />
      <img
        src={eng}
        onClick={() => {
          setLanguage("ENG");
        }}
        alt="English"
      />
    </div>
  );
};

export default LanguageSwitcher;
