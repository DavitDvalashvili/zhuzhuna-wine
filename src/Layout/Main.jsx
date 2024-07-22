import About from "../components/About";
import Zhuzhuna from "../components/Zhuzhuna";
import News from "../components/News";
import Bottle from "../components/Bottle";
import MobileBar from "../components/MobileBar";
import Contact from "../components/Contact";
import Cocktails from "../components/Cocktails";

const Main = () => {
  return (
    <main className="">
      <Zhuzhuna />
      <About />
      <News />
      <Bottle />
      <Cocktails />
      <MobileBar />
      <Contact />
    </main>
  );
};

export default Main;
