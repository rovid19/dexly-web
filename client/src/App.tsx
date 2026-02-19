import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import TermsOfService from "./components/termsOfService";
import PrivacyPolicy from "./components/privacyPolicy";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-dark1">
      <div className="max-w-7xl mx-auto bg-dark1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
