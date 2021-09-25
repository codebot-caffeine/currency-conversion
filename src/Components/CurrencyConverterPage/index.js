import { Component } from "react";
import "./index.css";

class CurrencyConverter extends Component {
  state = { result: 0, from: "USD", to: "INR", allCurrencies: [], toUse: {} };

  openSignIn = () => {
    const { changeState } = this.props;
    changeState();
  };

  componentDidMount() {
    this.fetchCurrencies();
    this.fetchCurrencyData();
  }

  setFrom = (event) => {
    this.setState({ from: event.target.value });
  };

  setTo = (event) => {
    this.setState({ to: event.target.value });
  };

  fetchCurrencies = async () => {
    const currencyUrl =
      "https://free.currconv.com/api/v7/currencies?apiKey=6622599a367b1df80821";
    const options = {
      METHOD: "GET",
    };
    const response = await fetch(currencyUrl, options);
    const data = await response.json();
    const results = data.results;
    const values = Object.keys(results);

    this.setState({
      allCurrencies: values,
    });
  };

  fetchCurrencyData = async () => {
    const { from, to } = this.state;
    const options = {
      METHOD: "GET",
    };
    const url = `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=6622599a367b1df80821`;
    const response = await fetch(url, options);
    const data = await response.json();
    const value = Object.values(data);
    this.setState({ result: value });
  };

  getAnswer = () => {
    const { from, to } = this.state;
    const data = { from, to };

    this.setState({ toUse: data }, this.fetchCurrencyData);
  };

  render() {
    const { allCurrencies, result, from, to } = this.state;
    return (
      <div>
        <form className="form-background">
          <div className="form-container">
            <p>From</p>
            <select value={from} onChange={this.setFrom} className="select-box">
              {allCurrencies.map((each) => {
                return (
                  <option value={each} key={each}>
                    {each}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-container">
            <p>To</p>
            <select value={to} onChange={this.setTo} className="select-box">
              {allCurrencies.map((each) => {
                return (
                  <option value={each} key={each}>
                    {each}
                  </option>
                );
              })}
            </select>
          </div>
          <p className="result-container">{result}</p>
        </form>
        <div className="button-setter">
          <button
            type="button"
            onClick={this.getAnswer}
            className="convert-button"
          >
            Convert
          </button>

          <button
            type="button"
            onClick={this.openSignIn}
            className="convert-button"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
