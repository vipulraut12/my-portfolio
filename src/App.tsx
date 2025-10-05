import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alumni from "./pages/Alumni";

export default function App() {
  return (
    <Routes>
      {/* Root page shows your full portfolio */}
      <Route path="/" element={<Home />} />
      {/* Alumni Networking Platform page (hidden link) */}
      <Route path="/alumni" element={<Alumni />} />
    </Routes>
  );
}
