import { Component } from "react";
import Header from "../Header";

import "./index.css";

class SignUp extends Component {
  state = {
    firstName: "",
    password: "",
    email: "",
    userData: [],
    errorMessage: "",
  };

  componentDidUpdate() {
    this.storingInLocalStorage();
  }

  storingInLocalStorage = () => {
    const { userData } = this.state;
    let userdata = JSON.stringify(userData);
    localStorage.setItem("data", userdata);
  };

  handleEvent = (event) => {
    event.preventDefault();
    const { firstName, password, email } = this.state;
    if (firstName === "" || password === "" || email === "") {
      this.setState({ errorMessage: "*All the fields are required" });
    }
    const data = {
      name: firstName,
      password: password,
      email: email,
    };

    const personalData = localStorage.getItem("data");
    const parsedData = JSON.parse(personalData);

    const identifyUsername = parsedData.filter(
      (each) => each.name === firstName && each.email === email
    );

    const identifyPassword = parsedData.filter(
      (each) => each.password === password
    );

    const identifyMail = parsedData.filter((each) => each.email === email);

    if (identifyPassword.length > 0) {
      this.setState({ errorMessage: "*change password" });
    } else if (identifyUsername.length > 0) {
      this.setState({ errorMessage: "*Username & email already taken" });
    } else if (identifyMail.length > 0) {
      this.setState({ errorMessage: "*email already taken" });
    } else if (firstName === "" || password === "" || email === "") {
      this.setState({ errorMessage: "*All the fields are required" });
    } else {
      this.setState((prevState) => ({
        userData: [...prevState.userData, data],
      }));
      this.setState({ errorMessage: "" });
    }
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <>
        <Header />
        <div className="background">
          <form className="form-container" onSubmit={this.handleEvent}>
            <h1 className="heading">Sign Up</h1>
            <div className="label-item">
              <label htmlFor="Email" className="heading-1">
                E-Mail
              </label>
              <input
                type="text"
                id="Email"
                placeholder="Type E-mail"
                onChange={this.changeEmail}
              />
            </div>
            <div className="label-item">
              <label htmlFor="FirstName" className="heading-1">
                User Name
              </label>
              <input
                type="text"
                id="FirstName"
                placeholder="User name"
                onChange={this.changeFirstName}
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
                onChange={this.changePassword}
              />
            </div>

            <button type="submit" className="submit-button">
              Sign Up
            </button>
            <p className="error-message">{errorMessage}</p>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
