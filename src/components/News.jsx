import news from "./../assets/news.json";
import { useLanguage } from "../context/languageContext.jsx";
import Button from "./Button.jsx";
import useAnimateOnScroll from "./../hooks/useAnimateOnScroll.jsx";
import animationVariants from "./../animations/animationVariants.jsx";
import { motion } from "framer-motion";

const News = () => {
  const { language } = useLanguage();

  const [ref, controls, variants] = useAnimateOnScroll(animationVariants);

  return (
    <section
      ref={ref}
      id="news"
      className="p-[20px] xl:px-[80px] xl:py-[40px] bg-backgroundColor-backgroundCol "
    >
      <motion.div initial="hidden" animate={controls} variants={variants}>
        <h2 className="mb-[20px] text-[48px] xl:text-[64px] leading-[56px] font-tommaso">
          {language == "GE" ? "სიახლეები" : "News"}
        </h2>
        <div className="flex flex-col gap-[20px] bg-center max-w-[768px] xl:max-w-full xl:flex-row xl:justify-evenly mx-auto">
          {news[`${language}`].map((newsItem) => (
            <div
              key={newsItem.id}
              className="bg-backgroundColor-purpleMid rounded-[10px] overflow-hidden xl:w-[413px]"
            >
              <div
                className="h-[347px] xl:h-[361px] xl:w-[413px] bg-cover rounded-[10px] overflow-hidden"
                style={{
                  backgroundImage: `url(${newsItem.image})`,
                }}
              ></div>
              <div className="px-[16px] py-[20px] text-color-primary font-arialgeo flex flex-col gap-[20px]">
                <p className="text-[14px]">{newsItem.date}</p>
                <h3 className=" text-[24px] leading-[28px]">
                  {newsItem.title}
                </h3>
                <p className="xl:h-[72px]">{newsItem.description}</p>
                <Button />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default News;
