import { LanguageProvider } from "./context/languageContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import News from "./components/sections/News";
import Bottle from "./components/sections/Bottle";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Cocktails from "./components/sections/Cocktails";
import MobileBar from "./components/sections/MobileBar";
import Zhuzhuna from "./components/sections/Zhuzhuna";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Zhuzhuna />
      <About />
      <News />
      <Bottle />
      <Cocktails />
      <MobileBar />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
