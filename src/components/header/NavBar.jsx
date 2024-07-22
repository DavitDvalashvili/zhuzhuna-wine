import { Link } from "react-scroll";
import { useLanguage } from "../../context/languageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion } from "framer-motion";
import useWindowWidth from "./../../hooks/useWindowWidth";
import PropTypes from "prop-types";

const NavBar = ({ setShowNav }) => {
  const { language } = useLanguage();
  const width = useWindowWidth();

  const variants =
    width >= 1440
      ? {
          hidden: { opacity: 0, x: 500 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }
      : {
          hidden: { opacity: 0, x: 0 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        };

  const handleLinkClick = () => {
    setShowNav(false);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <nav className="px-[10px] py-[16px] bg-buttonColor-primary absolute top-[85px] right-[32px] w-[156px] text-color-primary font-arialgeo lg:static lg:p-0 lg:w-[780px] lg:flex lg:bg-transparent">
        <ul className="flex flex-col gap-[20px] text-[16px] items-center xl:gap-[40px] lg:flex-row lg:mr-auto xl:ml-[-222px]">
          <li className="leading-[18px] cursor-pointer">
            <Link
              onClick={handleLinkClick}
              to="about-us"
              smooth={true}
              duration={700}
            >
              {language === "GE" ? "ჩვენ შესახებ" : "About Us"}
            </Link>
          </li>
          <li className="leading-[18px] cursor-pointer">
            <Link
              onClick={handleLinkClick}
              to="news"
              smooth={true}
              duration={700}
            >
              {language === "GE" ? "სიახლეები" : "News"}
            </Link>
          </li>
          <li className="leading-[18px] cursor-pointer">
            <Link
              onClick={handleLinkClick}
              to="bottle"
              smooth={true}
              duration={700}
            >
              {language === "GE" ? "ბოთლი" : "Bottle"}
            </Link>
          </li>
          <li className="leading-[18px] cursor-pointer">
            <Link
              onClick={handleLinkClick}
              to="cocktails"
              smooth={true}
              duration={700}
            >
              {language === "GE" ? "კოქტეილები" : "Cocktails"}
            </Link>
          </li>
          <li className="leading-[18px] cursor-pointer">
            <Link
              onClick={handleLinkClick}
              to="mobile-bar"
              smooth={true}
              duration={700}
            >
              {language === "GE" ? "მობილური ბარი" : "Mobile Bar"}
            </Link>
          </li>
          <li className="leading-[18px] cursor-pointer">
            <Link
              onClick={handleLinkClick}
              to="contact"
              smooth={true}
              duration={700}
            >
              {language === "GE" ? "კონტაქტი" : "Contact"}
            </Link>
          </li>
        </ul>
        <LanguageSwitcher />
      </nav>
    </motion.div>
  );
};

// Define prop types for NavBar component
NavBar.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};

export default NavBar;
