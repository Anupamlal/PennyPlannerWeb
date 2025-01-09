import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import { NotFound } from "./pages/NotFound";
import { JoinGroup } from "./pages/JoinGroup";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/join" element={<JoinGroup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
