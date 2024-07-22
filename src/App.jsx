import Zhuzhuna from "./components/Zhuzhuna";
import { LanguageProvider } from "./context/languageContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import News from "./components/News";
import Bottle from "./components/Bottle";
import About from "./components/About";
import Contact from "./components/Contact";
import Cocktails from "./components/Cocktails";
import MobileBar from "./components/MobileBar";

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
