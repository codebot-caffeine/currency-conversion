import { Component } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "../Header";
import CurrencyConverter from "../CurrencyConverterPage";

import "./index.css";

class SignIn extends Component {
  state = {
    name: "",
    password: "",
    login: {},
    renderResult: false,
    errorMsg: "",
  };

  handleEvent = (event) => {
    event.preventDefault();
    const { name, password } = this.state;
    const personalData = localStorage.getItem("data");
    const parsedData = JSON.parse(personalData);

    if (name === "" || password === "") {
      this.setState({ errorMsg: "*All fields are required" });
    } else {
      const getData = parsedData.filter(
        (each) => each.name === name && each.password === password
      );

      if (getData.length === 1) {
        this.setState({ renderResult: true, name: "", password: "" });
      } else {
        this.setState({ errorMsg: "username & password mismatch" });
      }
    }
  };

  changeState = () => {
    this.setState({ renderResult: false });
  };

  onChangeUsername = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  renderForm = () => {
    const { name, password, errorMsg } = this.state;
    return (
      <form className="form-con" onSubmit={this.handleEvent}>
        <h1 className="heading">Sign In</h1>
        <div className="label-item">
          <label htmlFor="UserName" className="heading-1">
            UserName
          </label>
          <input
            type="text"
            id="UserName"
            placeholder="Type username"
            onChange={this.onChangeUsername}
            value={name}
          />
        </div>
        <div className="label-item">
          <label htmlFor="Password" className="heading-1">
            Password
          </label>
          <input
            type="password"
            id="Password"
            placeholder="Type password"
            onChange={this.onChangePassword}
            value={password}
          />
        </div>
        <button type="submit" className="submit-button">
          Log In
        </button>
        <Link to="/forgotPassword" className="forgot-password">
          <p>Forgot Password ?</p>
        </Link>
        <p className="forgot-password">{errorMsg}</p>
      </form>
    );
  };

  render() {
    const { renderResult } = this.state;
    const { isAuthenticated } = useAuth0;
    return (
      <>
        <Header />
        <div className="background">
          {renderResult || isAuthenticated ? (
            <CurrencyConverter changeState={this.changeState} />
          ) : (
            this.renderForm()
          )}
        </div>
      </>
    );
  }
}

export default SignIn;
