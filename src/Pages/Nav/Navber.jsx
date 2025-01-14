import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import useAuth from "../../Hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../Firebase/AuthProvider";

const Navber = () => {
  const {user, logOut}=useAuth()
 // const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  //----------------------
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const link = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  //----------------------
  return (
    <div>
      <h1>user:{user?.email}</h1>
      <div className="navbar bg-base-100 mt-5 mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <Link className="btn btn-ghost  text-xl">
            <img className="items-center text-center" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-warning">apporment</button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
