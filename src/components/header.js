import React from "React";
import { Link } from "react-router";
import iconBoxing from "../styles/images/boxingicon.png";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: false
    };
  }
  buttonClicked() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    console.log("RENDERING");
    return (
      <header>
        <nav className="container navbar navbar-expand-lg justify-content-between">
          <a className="navbar-brand" href="#">
            YÜKSELEN SPOR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.buttonClicked.bind(this)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse"
            style={{ display: this.state.isNavOpen ? "block" : "none" }}
          >
            <ul className="navbar-nav  ">
              <li className="nav-item ">
                <Link
                  to="/"
                  activeClassName="active"
                  className="nav-link"
                  href=""
                >
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/hakkimizda"
                  activeClassName="active"
                  className="nav-link"
                  href=""
                >
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/iletisim"
                  activeClassName="active"
                  className="nav-link"
                  href=""
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
