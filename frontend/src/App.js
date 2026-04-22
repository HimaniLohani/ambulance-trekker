import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirm" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;