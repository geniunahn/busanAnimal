import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 라우터에 연결할 페이지들
import Home from "./pages/Home";
import Info from "./pages/Infomation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
