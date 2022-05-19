import React, { Component } from "react";
import { MenuItems } from "./menuItems";
import "./navbar.css";
import { Button } from "./../button";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="NavBarItem">
          <h1 className="NavBarLogo">
            React<i className="fab fa-react"></i>
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button>Signup </Button>
        </nav>
      </>
    );
  }
}

export default Navbar;
