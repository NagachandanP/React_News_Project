import React, { useContext } from "react";
import {
  Box,
  HStack,
  Text,
  Button,
  background,
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moon from "../moon.svg";
import noteContext from "../context/noteContext";

const styled = {
  position: "fixed",
};

const Header = () => {
  const context = useContext(noteContext);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      context.setDarkMode(true);
    } else {
      context.setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    // replace context.darkmode to darkMode in
    if (context.darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(context.darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [context.darkMode]);
  return (
    <>
      <nav className="navbar navbar-expand-lg   sticky-top " id="navbarId">
        <div className="container-fluid  ">
          <Link className="navbar-brand " to="/">
            <span>Breaking-News</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  <span> Home </span>
                </Link>
              </li>
              <li>
                <Link className="nav-link  " aria-current="page" to="/about">
                  <span> About</span>
                </Link>
              </li>

              <li className="nav-item dropdown"></li>
            </ul>
            <form className="d-flex ">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item  ">
                  <button className="btn btn-outline-success p-0 m-2">
                    <Select
                      className="nav-link dropdown-toggle  pb-2"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      value={context.nation}
                      onChange={(e) => {
                        context.update(e.target.value);
                      }}
                      w={"fit-content"}
                    >
                      <option
                        value="in"
                        style={{
                          color: "black",
                        }}
                      >
                        INDIA
                      </option>
                      <option
                        value="us"
                        style={{
                          color: "black",
                        }}
                      >
                        USA
                      </option>
                      <option
                        value="ca"
                        style={{
                          color: "black",
                        }}
                      >
                        CANADA
                      </option>
                    </Select>
                  </button>
                </li>
                <li className="nav-item me-auto">
                  <button className="btn btn-outline-secondary p-0 m-2">
                    <Select
                      className="nav-link dropdown-toggle  pb-2"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      value={context.category}
                      w={"fit-content"}
                      onChange={(e) => {
                        context.updateCategory(e.target.value);
                      }}
                    >
                      <option
                        value="business"
                        style={{
                          color: "black",
                        }}
                      >
                        BUSINESS
                      </option>
                      <option
                        value="entertainment"
                        style={{
                          color: "black",
                        }}
                      >
                        ENTERTAINMENT
                      </option>
                      <option
                        value="general"
                        style={{
                          color: "black",
                        }}
                      >
                        GENERAL
                      </option>
                      <option
                        value="health"
                        style={{
                          color: "black",
                        }}
                      >
                        HEALTH
                      </option>
                      <option
                        value="science"
                        style={{
                          color: "black",
                        }}
                      >
                        SCIENCE
                      </option>
                      <option
                        value="sports"
                        style={{
                          color: "black",
                        }}
                      >
                        SPORTS
                      </option>
                      <option
                        value="technology"
                        style={{
                          color: "black",
                        }}
                      >
                        TECHNOLOGY
                      </option>
                    </Select>
                  </button>
                </li>
                <li>
                  <Button
                    className="m-2"
                    id="darkMode"
                    onClick={() => context.setDarkMode(!context.darkMode)}
                  >
                    <img src={moon} alt="DarkMode" />
                    Dark Mode
                  </Button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
