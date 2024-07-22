import { useLanguage } from "../context/languageContext.jsx";
import cocktails from "./../assets/cocktails.json";
import useAnimateOnScroll from "./../hooks/useAnimateOnScroll.jsx";
import animationVariants from "./../animations/animationVariants.jsx";
import { motion } from "framer-motion";

const Cocktails = () => {
  const { language } = useLanguage();

  const [ref, controls, variants] = useAnimateOnScroll(animationVariants);

  return (
    <section
      ref={ref}
      id="cocktails"
      className="pt-[15px] xl:px-[80px] xl:pb-[40px] bg-backgroundColor-backgroundCol"
    >
      <motion.div initial="hidden" animate={controls} variants={variants}>
        <h2 className="mb-[20px] px-[20px] xl:px-[0px] text-[40px] xl:text-[64px] leading-[46px] font-tommaso ">
          {language == "GE" ? "კოქტეილი" : "Cocktail"}
        </h2>
        <div className="xl:grid xl:grid-cols-2 xl:gap-[23px]">
          {cocktails[`${language}`].map((cocktail, index) => (
            <div
              key={cocktail.id}
              className={`h-[352px] py-[30px] px-[16px] text-center bg-contain xl:bg-contain bg-no-repeat bg-left
                xl:py-[33px] xl:px-[63px]
                 bg-black xl:h-[467px] ${
                   index === 0 ? "col-span-2 xl:pr-[181px]" : ""
                 }`}
              style={{
                backgroundImage: `url(${cocktail.image})`,
              }}
            >
              <h3
                className={`text-[32px] xl:text-[40px] text-color-primary font-tommaso mb-[34px] xl:text-right 
                xl:ml-auto xl:flex xl:justify-start xl:mr-[40px]   ${
                  index == 0
                    ? "xl:w-[418px]"
                    : index == 1
                    ? "xl:w-[245px] xl:mr-0"
                    : "xl:w-[204px]"
                }
                `}
              >
                {cocktail.name}
              </h3>
              <div
                className={`text-[14px] text-color-primary flex flex-wrap w-[266px]  ml-auto
            md:mr-[100px] lg:mr-[200px] gap-x-[10px] gap-y-[9px] xl:gap-y-[0px] leading-[16px] xl:mr-[40px]
            ${index == 0 ? "xl:w-[418px] " : "xl:w-[204px]"}
            `}
              >
                {cocktail.ingredients.map((ingredient, index2) => (
                  <div
                    key={index2}
                    className={`flex flex-col justify-between pb-[12px] xl:py-[12px] w-[128px] 
                  xl:w-[204px] h-[60px] xl:h-[81px] text-left border-b-[0.5px] border-solid border-color-gray 
                  xl:text-[16px] xl:leading-[20px] ${
                    index2 == cocktail.ingredients.length - 1
                      ? "border-b-[0]"
                      : "border-b-[0.5px]"
                  } `}
                  >
                    <div>{ingredient.ingredient}</div>
                    <div className="text-color-gray">{ingredient.quantity}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Cocktails;
