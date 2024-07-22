import { useLanguage } from "../context/languageContext.jsx";
import useWindowWidth from "./../hooks/useWindowWidth.jsx";
import bottle from "/images/bottle.png";
import bckg1 from "/images/bckg1.png";
import bckg2 from "/images/bckg2.png";

const Bottle = () => {
  const { language } = useLanguage();
  const width = useWindowWidth();

  return (
    <section className="xl:px-[80px] bg-backgroundColor-backgroundCol ">
      <h2 className="mb-[20px] px-[20px] xl:px-[0px] text-[40px] xl:text-[64px] leading-[46px] font-tommaso ">
        {language == "GE" ? "ბოთლი" : "Bottle"}
      </h2>
      <div
        className="border-y-[2px] xl:border-[2px] border-solid border-buttonColor-primary p-[14px] xl:p-[0px] flex justify-evenly xl:justify-start bg-contain bg-right bg-no-repeat xl:max-w-[1640px] xl:mx-auto"
        style={{
          backgroundImage: `url(${width >= 1440 ? bckg2 : bckg1})`,
        }}
      >
        <div className=" w-[190px] xs:w-[205px] xl:w-[386px] ">
          <img src={bottle} alt="bottle" />
          {width < 1440 && (
            <p className="text-[16px leading-[18px] font-arialgeo">
              ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
              მისართმევად საუკეთესო ტემპერატურასა და გაზს.
            </p>
          )}
        </div>
        <div className="xl:ml-auto xl:my-[26.5px] xl:mr-[60px] xl:w-[757px]">
          <h3 className="text-[26px] xs:text-[32px] xl:text-[40px] leading-[44px] font-tommaso text-color-primary bg-color-black mix-blend-difference mb-[10px] xl:mb-[40px] ">
            {language == "GE" ? "ჟუჟუნა ბოთლი" : "Zuzuna Bottle"}
          </h3>
          <div className="flex flex-col xl:flex-row xl:mb-[50px] items-end gap-[10px] xl:gap-[20px] text-color-primary text-[14px] leading-[18px] xl:text-[20px] xl:leading-[23px] font-arialgeo mb-[10px]">
            <p className="w-[140px] xs:w-[160px]  h-[68px] xl:w-[173px]  xl:h-[84px] bg-buttonColor-primary rounded-[10px] flex flex-col justify-center items-center">
              <span>{language == "GE" ? "მოცულობა" : "Volume"} </span>
              <span>{language == "EN" ? "250 მლ" : "250 ml"}</span>
            </p>
            <p className="w-[140px] xs:w-[160px] h-[68px] xl:w-[173px]  xl:h-[84px] bg-buttonColor-primary  rounded-[10px] flex flex-col justify-center items-center">
              <span>{language == "GE" ? "ალკოჰოლი" : "Alcohol"}</span>
              <span>11%</span>
            </p>
            <p className="w-[140px] xs:w-[160px] h-[68px] xl:w-[173px]  xl:h-[84px] bg-buttonColor-primary  rounded-[10px] flex flex-col justify-center items-center ">
              <span>{language == "GE" ? "ბუნებრივი გაზი" : "Natural Gas"}</span>
              <span>{language == "GE" ? "2.5 ბარი" : "2.5 bar"}</span>
            </p>
          </div>
          {width >= 1440 && (
            <p className="xl:text-[24px] xl:leading-[28px] text-color-primary font-arialgeo bolder xl:mb-[46px] mix-blend-difference bg-black  ">
              {language == "GE"
                ? `              ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
              მისართმევად საუკეთესო ტემპერატურასა და გაზს.`
                : `The Zhuzhuna bottle is 250 ml because this portion maintains the best temperature and carbonation for consumption`}
            </p>
          )}
          <div className="h-[58px] xl:h-[108px] w-[61px] xl:w-[114px] xl:bg-backgroundColor-purpleMid border-[1px] border-solid border-buttonColor-primary rounded-[10px] flex justify-center items-center text-[12px] xl:text-[24px] xl:text-color-primary leading-[14px] ml-auto">
            4.5₾
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottle;
