import "./Header.css";
import React, { useState, useContext } from "react";
import Logo from "../../assets/Logo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import Add from "../../assets/Add";
import SellBg from "../../assets/SellBg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/Context";
import { signout } from "../../authentication";

function Header() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [locality, setLocality] = useState("India");

  async function handleSignOut() {
    await signout();
    navigate("/login");
  }

  return (
    <div className="nav-bar">
      <header className="header">
        <div className="header-container">
          <Logo onClick={() => navigate("/")} className="logo-header" />
          <div className="search-location-container">
            <div className="locality-search">
              <div className="locality-search-icon-container">
                <Search />
              </div>
              <input
                type="text"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="locality-search-box"
              />
              <div className="locality-search-da-container">
                <div className="locality-search-da">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className="search-box-container">
              <input
                type="text"
                className="main-search-box"
                placeholder="Find Cars, Mobile Phones and more..."
              />
              <div className="main-search-icon-container">
                <Search className="main-search-icon " />
              </div>
            </div>
          </div>
          <div className="header-end-section">
            <div className="language-selector">
              <button className="language-button">
                ENGLISH{" "}
                <span className="arrow">
                  <Arrow />
                </span>
              </button>
            </div>
            {user ? (
              <>
                <div className="user-avatar">
                  <div>
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "42px",
                        height: "42px",
                      }}
                      src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                      alt=""
                    />
                    <div className="hover-effecting">
                      <Arrow className="logout-arrow" />
                      <div className="login-btn-container">
                        <button className="login-btn" onClick={handleSignOut}>
                          logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link className="login-btn marging-class" to={"/login"}>
                Login
              </Link>
            )}
            <div className="sell-container">
              <button onClick={() => navigate("/add")} className="sell-btn">
                <Add className="sell-add" /> &nbsp;SELL
              </button>
              <SellBg className="sell-bg" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
