import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import AuthProfilePage from "./pages/AuthProfilePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Post from "./pages/Post";
import ProfilePage from "./pages/ProfilePage";
import RecipeListPage from "./pages/RecipeListPage";
import RegisterPage from "./pages/RegisterPage";
import SocialPage from "./pages/SocialPage";
import StatisticsPage from "./pages/StatisticsPage";
import { AuthProvider } from "./context/AuthProvider";
import useAuth from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const { auth } = useAuth();

  console.log("from APP, auth: " + auth?.username);

  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipes" element={<RecipeListPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="/social" element={<SocialPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/:id" element={<AuthProfilePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
