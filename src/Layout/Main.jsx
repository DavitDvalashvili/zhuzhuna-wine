import About from "../components/About";
import Zhuzhuna from "../components/Zhuzhuna";
import News from "../components/News";
import Bottle from "../components/Bottle";
import MobileBar from "../components/MobileBar";
import Contact from "../components/Contact";

const Main = () => {
  return (
    <main className="">
      <Zhuzhuna />
      <About />
      <News />
      <Bottle />
      <MobileBar />
      <Contact />
    </main>
  );
};

export default Main;
