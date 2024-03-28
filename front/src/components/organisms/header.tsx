import { Link } from "react-router-dom";
import './header.css'

const logo = require("../../assets/images/Logo.jpg");

export const Header = () => {
  return (
    <header>
      <div className="container outer-padding">
        <div className="head-content">
          <h1>
            <Link to="/"><img src={logo} alt="" />
            </Link>
          </h1>
          <nav className="head-link">
            <Link to="/find-apartments">Find apartments</Link>
            <Link to="/neighborhoods">Neighborhoods</Link>
          </nav>
          <nav className="header-auth">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
