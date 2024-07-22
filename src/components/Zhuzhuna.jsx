import bannerMobile from "/images/banner3.png";
import bannerDesktop from "/images/banner.png";
import useWindowWidth from "./../hooks/useWindowWidth.jsx";
import { useLanguage } from "../context/languageContext.jsx";
import useAnimateOnScroll from "./../hooks/useAnimateOnScroll.jsx";
import animationVariants from "./../animations/animationVariants.jsx";
import { motion } from "framer-motion";

const Zhuzhuna = () => {
  const width = useWindowWidth();
  const { language } = useLanguage();

  const [ref, controls, variants] = useAnimateOnScroll(animationVariants);

  return (
    <section
      className="h-[459px] xl:h-[720px] bg-cover bg-bottom md:bg-right px-[23px] py-[30px] text-color-primary xl:px-[80px] xl:py-[77px]"
      style={{
        backgroundImage: `url(${width >= 768 ? bannerDesktop : bannerMobile})`,
      }}
      ref={ref}
    >
      <motion.div initial="hidden" animate={controls} variants={variants}>
        <h1 className="text-[48px] leading-[56px] font-tommaso xl:text-[72px] xl:leading-[83px]">
          {language == "GE" ? "ჟუჟუნა" : "Zhuzhuna"}
        </h1>
        <h5 className="my-[24px] xl:my-[48px] font-tommaso text-[36px] xl:text-[48px] max-w-[500px]">
          {language == "GE"
            ? "ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა"
            : "The wine is neither very still nor completely sparkling"}
        </h5>
        {width >= 1440 && (
          <p className="w-[769px] text-[24px] font-arialgeo">
            {language == "GE"
              ? "მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ, ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ მსუბუქ გაზს იძენს."
              : "It is made from early harvest Rkatsiteli and green grapes, which gives it a distinctive acidity. Additionally, it acquires a natural light effervescence from secondary fermentatio"}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Zhuzhuna;
