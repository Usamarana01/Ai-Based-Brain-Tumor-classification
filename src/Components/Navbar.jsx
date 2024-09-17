import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faBars, faXmark, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth for authentication context

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser, logout } = useAuth(); // Destructure currentUser and logout from useAuth

  const openNav = () => {
    setNav(!nav);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toggleDropdown();
    } catch (error) {
      console.error("Logout Error: ", error.message);
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">NeuroAI </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/home" className="navbar-links">Home</Link>
        </li>
        <li>
          <Link to="/blogs" className="navbar-links">Blogs</Link>
        </li>
        <li>
          <Link to="/discussionforum" className="navbar-links">Discussion Forum</Link>
        </li>
        <li>
          <Link to="/pricing" className="navbar-links">Pricing</Link>
        </li>
        <li className="dropdown">
          <button className="dropdown-btn" onClick={toggleDropdown}>
             <FontAwesomeIcon icon={faUser} className="profile-icon" />
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              {currentUser ? (
                <>
                  <Link to="/updateprofile" className="dropdown-item" onClick={toggleDropdown}>Update Profile</Link>
                  <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="dropdown-item" onClick={toggleDropdown}>Login</Link>
                  <Link to="/signup" className="dropdown-item" onClick={toggleDropdown}>Signup</Link>
                </>
              )}
            </div>
          )}
        </li>
      </ul>

      <button className="navbar-btn" type="button" disabled={isButtonDisabled} onClick={handleChatBtnClick}>
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? 'open-nav' : ''}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">Home</Link>
          </li>
          <li>
            <Link onClick={openNav} to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link onClick={openNav} to="/discussionforum">Discussion Forum</Link>
          </li>
          <li>
            <Link onClick={openNav} to="/pricing">Pricing</Link>
          </li>
          <li className="mobile-dropdown">
            <button className="mobile-dropdown-btn" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} className="profile-icon" />
            </button>
            {dropdownOpen && (
              <div className="mobile-dropdown-menu">
                {currentUser ? (
                  <>
                    <Link to="/updateprofile" className="mobile-dropdown-item" onClick={toggleDropdown}>Update Profile</Link>
                    <button className="mobile-dropdown-item" onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="mobile-dropdown-item" onClick={toggleDropdown}>Login</Link>
                    <Link to="/signup" className="mobile-dropdown-item" onClick={toggleDropdown}>Signup</Link>
                  </>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon icon={faBars} onClick={openNav} className="hamb-icon" />
      </div>
    </div>
  );
}

export default Navbar;
