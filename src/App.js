import "./App.css";
import CompUseReducer from "./components/CompUseReducer";
import FormBasics from "./components/FormBasics";
import FormBasics2 from "./components/FormBasics2";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <div className="App">
      {/* <CompUseReducer /> */}

      {/* <LoginForm /> */}

      {/* <FormBasics /> */}
      {/* <FormBasics2 /> */}
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/profile"> Profile </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div> Foooter </div>
      </Router>
    </div>
  );
}

export default App;
