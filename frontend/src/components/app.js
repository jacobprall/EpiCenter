import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBar from "./nav/navbar";
import Login from "./session/login";
import SignUp from "./session/sign_up";
import '../assets/stylesheets/style.scss'
import SplashPage from "./splash/splash_page";
import home from "./home/home";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <Route path="/" component={NavBar}/>
    <Switch>
      <ProtectedRoute exact path ="/home" component={home}/>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/signup" component={SignUp} />
    </Switch>
  </div>
);

export default App;
