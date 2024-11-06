// import MultiLanguage from "./MultiLanguage";
import { LanguageProvider } from "./Context/LanguageProvider.js";
import Content from "./Components/Content.jsx";
import LangSelector from "./Components/LangSelector.jsx";

function App() {
  return (
    <LanguageProvider>
      <LangSelector />
      <Content />
    </LanguageProvider>
  );
}
export default App;
