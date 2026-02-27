import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
