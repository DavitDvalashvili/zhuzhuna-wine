import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import useCountry from "../hooks/useCountry";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const country = useCountry();
  const [language, setLanguage] = useState("GE");

  useEffect(() => {
    if (country.country === "GE") {
      setLanguage("GE");
    } else {
      setLanguage("EN");
    }
  }, [country.country]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => useContext(LanguageContext);
