import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import "./app.css";
import Greeting from "./routes/Greeting";
import Loading from "./routes/Loading";
import { AnimatePresence } from "framer-motion";
import Error from "./routes/Error";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
