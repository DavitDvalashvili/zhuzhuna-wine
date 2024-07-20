import sun from "/icons/sun.svg";
import moon from "/icons/moon.svg";
import { useState } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div onClick={toggleDarkMode}>
      <img
        className="w-[20px] h-[20px]"
        src={darkMode ? sun : moon}
        alt="light and light"
      />
    </div>
  );
};

export default ThemeSwitcher;
