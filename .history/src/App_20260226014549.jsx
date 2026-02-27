import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainLayout from "./layouts/MainLayout";
import CommitteesPage from "./features/committees/pages/CommitteesPage";
import CommitteeDetailsPage from "./features/committees/pages/CommitteeDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/committees" element={<CommitteesPage />} />
          <Route path="/committees/:slug" element={<CommitteeDetailsPage />} />
          {/* Fallback — redirect to committees for now */}
          <Route path="*" element={<CommitteesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
