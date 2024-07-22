import marani from "/images/marani.png";
import { useLanguage } from "../context/languageContext.jsx";
import { motion } from "framer-motion";
import useAnimateOnScroll from "./../hooks/useAnimateOnScroll.jsx";
import animationVariants from "./../animations/animationVariants.jsx";

const About = () => {
  const { language } = useLanguage();
  const [ref, controls, variants] = useAnimateOnScroll(animationVariants);

  return (
    <section
      id="about-us"
      className="h-[532px] text-[14px] md:text-[16px] xl:text-[24px] bg-cover xl:bg-right bg-center text-color-primary xl:h-[652px] px-[20px] py-[23px] xl:px-[80px] xl:py-[70px]"
      style={{
        backgroundImage: `url(${marani})`,
      }}
      ref={ref}
    >
      <motion.div initial="hidden" animate={controls} variants={variants}>
        <h2 className="text-[48px] font-tommaso mb-[32px]">
          {language == "GE" ? "ჩვენ შესახებ" : "ABOUT US"}
        </h2>
        <div className="font-arialgeo max-w-[700px] xl:max-w-[928px]">
          <p className="mb-[16px]">
            {language == "GE"
              ? "ჟუჟუნა ძალიან მშრალი და მომჟავო ღვინო 2017 წელს შეიქმნა."
              : "Zhuzhuna is a very dry and acidic wine created in 2017."}
          </p>

          <p className="mb-[16px]">
            {language == "GE"
              ? `ბევრი ფიქრისა და ღვინის მრავალწლიანი სიყვარულის შემდეგ, კომპანია,
        ჩვენივე სახსრებით, 6-მა მეგობარმა დავაარსეთ. ჩვენი მთავარი მიზანი,
        დალევის კულტურის განსხვავებული გამოცდილების შექმნა და აქამდე არარსებული
        თანამდეროვე ღვინის თანამედროვე კულტურაში პოპულარიზაცია იყო.`
              : `After much thought and a long-standing love for wine, we, six friends, 
          founded the company with our own funds. Our main goal was to create a different 
          experience of drinking culture and to popularize a contemporary wine culture that 
          did not exist before.`}
          </p>

          <p className="mb-[16px]">
            {language == "GE"
              ? `ჩამოსასხმელი ჟუჟუნა საქართველოს უამრავ კაფე-ბარს მალევე დაუმეგობრდა და
        2020 წელს ბოთლის ფორმითაც შეავსო მაღაზიათა ქსელი, რაც ასეთ მოკლე დროში,
        ჩვენთვის, მნიშვნელოვანი სიახლეა.`
              : `Draft Zhuzhuna quickly became popular in numerous cafes and bars in Georgia, and in 2020, 
          it also entered the retail network in bottle form, which is a significant milestone 
          for us in such a short time.`}
          </p>

          <p className="mb-[16px]">
            {language == "GE"
              ? `ჟუჟუს ისტორია საქართველოს ფარგლებსაც სცდება და ჩინეთსა და იაპონიაში
        ექსპორტით გააქვს თბილისური დალევის კულტურა.`
              : `ZhuZhuna's history extends beyond the borders of Georgia, exporting the 
            Tbilisi drinking culture to China and Japan.`}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
