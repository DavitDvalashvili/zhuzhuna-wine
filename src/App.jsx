import { LanguageProvider } from "./context/languageContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Main from "./Layout/Main";

function App() {
  return (
    <LanguageProvider>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </LanguageProvider>
  );
}

export default App;
