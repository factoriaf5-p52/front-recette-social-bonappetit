import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import AuthProfilePage from "./pages/AuthProfile";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFound";
import ProfilePage from "./pages/Profile";
import RecipeListPage from "./pages/RecipeList";
import RegisterPage from "./pages/Register";
import SocialPage from "./pages/Social";
import StatisticsPage from "./pages/Statistics";
import { AuthProvider } from "./context/AuthProvider";
import useAuth from "./hooks/useAuth";
import Post from "./pages/Post";

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
              <Route path="/post" element={<Post />} />
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
