import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import ForgotPassword from "./Components/ForgotPassword";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
