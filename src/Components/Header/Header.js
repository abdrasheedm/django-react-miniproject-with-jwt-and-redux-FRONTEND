import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {


  const navigate = useNavigate()
  const value = useSelector((state) => {
    return state.Fname
  })
  const dispatch = useDispatch()
  const logout = () => {
    
    dispatch({
      type : 'logout',
      payload : ''
  })
  navigate("/signin")

  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
                <NavLink to="/" className="nav-link active">
                  Home
                </NavLink>
              </li>
            </ul>

            <span>
              {value ? (
                <Link to="/dashboard">
                  <span className="btn btn-lg btn-dark m-2">
                    Welcome {value}
                  </span>
                </Link>
              ) : (
                <Link to="/signin">
                  <span className="btn btn-lg btn-dark m-2">Login</span>
                </Link>
              )}
            </span>

            <span>
              {value ? ("") : (
                <Link to="/signup">
                  <button className="btn btn-lg btn-dark">Signup</button>
                </Link>
              )}
            </span>
            { value ? <button className="btn btn-lg btn-dark" onClick={logout}>Logout</button> : '' }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
