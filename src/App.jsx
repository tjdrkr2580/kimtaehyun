import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import "./app.css";
import Greeting from "./routes/Greeting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
