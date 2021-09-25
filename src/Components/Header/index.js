import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <div>
    <div className="header">
      <h1 className="head"> Currency Converter</h1>
      <div>
        <Link to="/signup" className="head">
          <p>Sign Up</p>
        </Link>
        <Link to="/signin" className="head">
          <p>Sign In</p>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
