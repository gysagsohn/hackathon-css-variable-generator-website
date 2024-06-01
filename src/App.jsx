import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePage";
import HomePage from "./pages/HomePage";
import GeneratorPage from "./pages/GeneratorPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />} />
        <Route path="generator" element={<GeneratorPage />} />
        {/* <Route path="generator/saved" element={<SavedThemePage />} />  */}
      </Route>
    </Routes>
  );
}

export default App;
