import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import SecondPagePage from "./pages/SecondPagePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPagePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
