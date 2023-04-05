import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <>
      <header
        className="container-fluid row py-2"
        style={{ backgroundImage: 'url("./bg5.jpg")' }}
      >
        <div className="top-left col-2 d-none d-sm-block">
          <img src="/images/DAIICT.png" alt="" />
        </div>
        <div className="top-center col-12 col-sm-8 text-center text-capitalize">
          <h1 className="main-heading">
            <p
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
              }}
            >
              Open Conference Management System
            </p>
          </h1>
          <h2 className="sec-heading">
            Streamlining the Conference Experience for Organizers and Attendees
          </h2>
          <h4 style={{ fontWeight: 550 }} className="font-weight-bold">
            Dhirubhai Ambani Institute of Information and Communication
            Technology
          </h4>
        </div>
        {!user ? (
          <div class="top-right col-2 d-none d-sm-flex flex-column mt-4">
            <Link
              to="/login"
              className="btn  text-light font-weight-bolder mb-3"
            >
              Login
            </Link>
            <Link to="/signup" className="btn  text-light font-weight-bolder">
              Signup
            </Link>
          </div>
        ) : (
          <div class="top-right col-2 d-none d-sm-flex flex-column mt-4">
            <div className="bg-dark p-2 text-light mb-3 text-center rouded-3">
              {user.email}
            </div>
            <Link
              onClick={handleClick}
              className="btn  text-light font-weight-bolder mb-3"
            >
              Logout
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
