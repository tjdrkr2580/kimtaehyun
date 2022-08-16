import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
