//dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import { LandingPage } from "./pages/LandingPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
