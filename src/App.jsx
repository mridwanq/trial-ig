import "./App.css";
import { EditProfile } from "./components/profile/menuprofile";
import "./css/instagram.css";
import "./css/mobile.css";
import { HomePage } from "./pages/home/home";
import { ProfilePage } from "./pages/home/profile";
import { routes } from "./routes/routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/profilepage" element={<ProfilePage />} />
      <Route path="/profile" element={<EditProfile />} />
      {routes.map((route, i) => (
        <Route {...route} key={i} />
      ))}
    </Routes>
  );
}

export default App;
