import { useState } from "react";
import Logo from "../../assets/Namaste_React_logo.png";
// import { Container } from "@mui/material";
// import { Container } from "@mui/material";
// import { ReactComponent as Logo } from "../assets/Namaste_React_logo.svg";
import "./Header.css";

export const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    // <Container maxWidth="xl">
    <div className="wrapper">
      <div className="navbar">
        <div style={{ width: "10%" }}>
          <img
            src={Logo}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

            <li>
              {authenticated ? (
                <button
                  onClick={() => {
                    setAuthenticated(!authenticated);
                  }}
                >
                  logout{" "}
                </button>
              ) : (
                <button
                  onClick={() => {
                    setAuthenticated(!authenticated);
                  }}
                >
                  login
                </button>
              )}
            </li>
            {/* <li>
              <button>Logout</button>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
    // </Container>
  );
};
