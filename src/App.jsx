import { Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import SignupPage from "./features/auth/pages/SignupPage";
import HomePage from "./features/home/pages/Home";
import Commentçamarche from "./features/marketing/pages/Commentçamarche";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/Commentçamarche" element={<Commentçamarche />} />
    </Routes>
  );
}
