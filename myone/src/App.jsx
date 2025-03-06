import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Process from "./pages/Process"
import Projects from "./pages/Projects"
import Why from "./pages/Why"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/process" element={<Process/>} />
        <Route path="/why" element={<Why/>} />
      </Routes>
    </div>
  );
}

export default App;
