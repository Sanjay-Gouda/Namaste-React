import { useState } from "react";
import Logo from "../../assets/Namaste_React_logo.png";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

export const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const MenuLength = useSelector((state) => state.cart.item);

  console.log(MenuLength, "length");
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
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>

            <li onClick={() => navigate("/contact")}>Contact</li>
            <li onClick={() => navigate("/cart")}>Cart- {MenuLength.length}</li>
            {/* <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link> */}

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
