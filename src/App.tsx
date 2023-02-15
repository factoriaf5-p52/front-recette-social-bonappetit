import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import RecipeListPage from "./pages/RecipeListPage";
import SocialPage from "./pages/SocialPage";
import StatisticsPage from "./pages/StatisticsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipeListPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/social" element={<SocialPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
