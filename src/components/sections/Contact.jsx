import { useState } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "./../../context/languageContext.jsx";
import banner4 from "/images/banner4.png";
import banner1 from "/images/banner1.png";
import useWindowWidth from "./../../hooks/useWindowWidth.jsx";
import useAnimateOnScroll from "./../../hooks/useAnimateOnScroll.jsx";
import animationVariants from "./../../animations/animationVariants.jsx";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { language } = useLanguage();
  const width = useWindowWidth();

  const [ref, controls, variants] = useAnimateOnScroll(animationVariants);

  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // display error message on the screen
  const handleError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 1000,
    });
  };

  //display success message on the screen
  const handleSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 1000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_7150c0g";
    const templateID = "template_2o0zlkh";
    const userID = "iT2E3wYN0u4FTwetc";

    const templateParams = {
      to_email: "natogogatishvili1967@gmail.com",
      mobile: formData.mobile,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        handleSuccess("Message sent successfully!");
      },
      (err) => {
        console.log("FAILED...", err);
        handleError("Failed to send message.");
      }
    );
    setFormData({
      mobile: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="flex justify-between md:justify-evenly  bg-cover bg-left h-[352px] xl:h-[594px] px-[20px] xl:pl-[80px] xl:pr-[225px] xl:py-[112px] py-[26px] gap-[24px] xl:gap-[123px]"
      style={{
        backgroundImage: `url(${width < 1440 ? banner4 : banner1})`,
      }}
      ref={ref}
    >
      <motion.form
        initial="hidden"
        animate={controls}
        variants={variants}
        onSubmit={handleSubmit}
        className="space-y-3 xl:space-y-[17px] w-[209px] xl:w-[328px]"
      >
        <div>
          <label
            htmlFor="mobile"
            className="text-color-primary text-[12px] font-arialgeo block xl:text-[20px]"
          >
            {language == "GE" ? "ტელეფონი" : "Mobile Number"}
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder={
              language == "GE" ? "მიუთითეთ ნომერი..." : "Type number..."
            }
            value={formData.mobile}
            onChange={handleChange}
            className=" w-full bg-buttonColor-secondary focus:outline-none rounded-[10px] h-[40px] px-[10px] py-[14.5px] text-[10px] xl:text-[12px] text-inputColor-secondary "
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-color-primary text-[12px] font-arialgeo block xl:text-[20px]"
          >
            {language == "GE" ? "ელ.ფოსტა" : "Email"}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={
              language == "GE" ? "მიუთითეთ ელ-ფოსტა..." : "Type email..."
            }
            value={formData.email}
            onChange={handleChange}
            className=" w-full bg-buttonColor-secondary focus:outline-none rounded-[10px] h-[40px] px-[10px] py-[14.5px] text-[10px] xl:text-[12px] text-inputColor-secondary "
            required
          />
        </div>
        <div className="h-[116px] xl:h-[153px]">
          <label
            htmlFor="message"
            className="text-color-primary text-[12px] font-arialgeo  xl:text-[20px] "
          >
            {language == "GE" ? "მესიჯი" : " Message"}
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={
              language == "GE" ? "დაწერეთ მესიჯი..." : "Type message..."
            }
            className=" w-full bg-buttonColor-secondary resize-none focus:outline-none rounded-[10px] h-[98px] xl:h-[120px] px-[10px] py-[14.5px] text-[10px] xl:text-[12px] text-inputColor-secondary "
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-buttonColor-primary text-color-primary font-arialgeo cursor-pointer rounded-[50px] px-[33px] xl:py-[14px] py-[7px] xl:px-[22.5px] text-[16px] leading-[18px]  block ml-auto"
        >
          {language == "GE" ? "გაგზავნა" : "SEND"}
        </button>
      </motion.form>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-[177px] text-[12px] xl:text-[24px] text-color-primary font-arialgeo xl:max-w-[unset] xl:w-[685px]"
      >
        <p className="mb-[9px]">
          {language == "GE"
            ? `ქორფა ჟუჟუნა უამრავ კაფე-ბარში შეგხვდება და შენთვის საყვარელ
          კოქტეილებს ააცქრიალებს. ცივი და ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ
          ონკანიდან ეშვება.`
            : `You will find fresh Zhuzhuna in countless cafes and bars, and it will 
            sparkle your favorite cocktails. Cold and bubbly Zhuzhu flows directly 
            from the tap into the cocktail.`}
        </p>
        <p>
          {language == "GE"
            ? `ჩამოსასხმელი ჟუჟუნა კაფე-ბარებს მრავალჯერადი გამოყენების კეგებში
          მიეწოდება და დამატებით შეფუთვას არ საჭიროებს, რის გამოც გარემოსთან
          განსაკუთრებით მეგობრობს და არც მის დაბინძურებას იწვევს.`
            : `Draft Zhuzhuna is supplied to cafes and bars in reusable kegs and 
            does not require additional packaging, making it particularly environmentally 
            friendly and not contributing to pollution.`}
        </p>
      </motion.div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
