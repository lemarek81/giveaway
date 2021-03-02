import React, { createContext, useState } from "react";
import "./App.scss";
import "./scss/main.scss";
import Home from "./components/home/_home";
import Login from "./components/home/loginAndRegistration/_login";
import Registration from "./components/home/loginAndRegistration/_register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainMenu from "./components/home/header/_mainMenu";

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//sprawdzić authContext //
  return (
    <div className="AppContainer">
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Router>
          <MainMenu />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Registration}></Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
