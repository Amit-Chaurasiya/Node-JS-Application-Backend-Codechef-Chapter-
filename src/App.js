import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});
  const [userName, setUserName] = useState("");
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Home setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} setUserName={setUserName}/>
              )
            }
          />
          <Route
            exact
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
