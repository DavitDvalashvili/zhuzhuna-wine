import banner2 from "/images/banner2.png";
import { useLanguage } from "../context/languageContext.jsx";

const MobileBar = () => {
  const { language } = useLanguage();

  return (
    <section
      className="h-[259px] bg-cover  bg-bottom p-[12px] xl:p-[101px] xl:h-[635px]"
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      <div className="md:mr-[150px] xl:mr-[0px] w-[305px] ml-auto xl:w-[705px]">
        <h2 className="text-color-black text-[32px] xl:text-[64px] xl:leading-[74px] leading-[37px] font-tommaso xl:mb-[52px]">
          მობილური ბარი
        </h2>
        <p className="font-tommaso text-color-primary text-[24px] leading-[24px] mb-[32px] xl:text-[48px] ">
          გავჩნდებით ყველგან, სადაც ისურვებ
        </p>
        <p className="text-color-primary font-arialgeo text-[16px] leading-[18px] mb-[20px] xl:mb-[74px] xl:text-[24px] xl:leading-[32px] ">
          ჟუჟუნას ბარი მოგაგნებს ყველგან, სადაც იქნები. თან მოიყვანს ბარმენს,
          ქორფა ჟუჟუნას მაცივარს დააა შენი სტუმრების ჩაჟუჟუნებაზე უუამრავი
          კოქტეილით იზრუნებს.
        </p>
        <button
          className="bg-buttonColor-primary text-color-primary font-arialgeo cursor-pointer 
        rounded-[50px] px-[21px] py-[7px] xl:py-[13.5px] xl:px-[46px] text-[16px] xl:text-[24px] 
        leading-[18px] xl:leading-[28px]  block ml-auto xl:mx-auto"
        >
          {language == "GE" ? " გაიგე მეტი" : "See more"}
        </button>
      </div>
    </section>
  );
};

export default MobileBar;
