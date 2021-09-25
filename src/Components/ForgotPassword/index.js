import { Component } from "react";

import Header from "../Header";

import "./index.css";

class ForgotPassword extends Component {
  state = { username: "", newPassword: "", email: "", errormsg: "" };

  handleEvent = (event) => {
    event.preventDefault();
    const { username, newPassword, email } = this.state;
    const dataList = localStorage.getItem("data");
    const s = JSON.parse(dataList);
    const data = s.filter((each) => each.email === email);
    if (data.length === 1) {
      const notSimilar = s.filter((each) => each.email !== email);
      localStorage.removeItem("data");
      const newData = {
        name: username,
        password: newPassword,
        email,
      };
      const spreadData = [...notSimilar, newData];
      localStorage.setItem("data", JSON.stringify(spreadData));
      this.setState({ newPassword: "", username: "", email: "" });
    } else {
      this.setState({ errormsg: "email is not registered" });
    }
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ newPassword: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { username, email, newPassword, errormsg } = this.state;
    return (
      <>
        <Header />
        <div className="background">
          <form className="form-con" onSubmit={this.handleEvent}>
            <h1 className="heading">Change password</h1>
            <div className="label-item">
              <label htmlFor="UserName" className="heading-1">
                UserName
              </label>
              <input
                type="text"
                id="UserName"
                placeholder="Type username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="label-item">
              <label htmlFor="Email" className="heading-1">
                E-mail
              </label>
              <input
                type="text"
                placeholder="Type existing e-mail"
                id="Email"
                onChange={this.onChangeEmail}
                value={email}
              />
            </div>

            <div className="label-item">
              <label htmlFor="Password" className="heading-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="Type password"
                id="Password"
                onChange={this.onChangePassword}
                value={newPassword}
              />
            </div>
            <button type="submit" className="sub-button">
              change Password
            </button>
            <p>{errormsg}</p>
          </form>
        </div>
      </>
    );
  }
}

export default ForgotPassword;
