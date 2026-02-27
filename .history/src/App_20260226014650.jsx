import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import CommitteeDetailsPage from "./features/committees/pages/CommitteeDetailsPage";
import CommitteesPage from "./features/committees/pages/CommitteesPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/committees" element={<CommitteesPage />} />
          <Route path="/committees/:slug" element={<CommitteeDetailsPage />} />
          {/* Fallback — redirect to committees for now */}
          <Route path="*"  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
