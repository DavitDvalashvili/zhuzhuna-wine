import { useLanguage } from "../context/languageContext.jsx";

const Button = () => {
  const { language } = useLanguage();

  return (
    <button className="bg-color-black font-arialgeo cursor-pointer rounded-[50px] px-[21px] xl:p-[14px] py-[7px] text-[16px] leading-[18px]  block ml-auto">
      {language == "GE" ? " გაიგე მეტი" : "See more"}
    </button>
  );
};

export default Button;
