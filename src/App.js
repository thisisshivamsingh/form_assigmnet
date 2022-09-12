import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
