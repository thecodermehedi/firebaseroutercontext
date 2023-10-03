import {useContext} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthProvider";

const Navbar = () => {
  const {user, signoutUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signoutUser()
      .then(() => {
        console.log("User Logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        return;
      });
  };
  return (
    <>
      <div className="navbar  bg-gray-900 text-gray-300 px-5 md:px-10 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn bg-transparent text-white hover:bg-transparent border-none mr-2 lg:hidden"
            >
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52"
            >
              <NavLink
                to={"/"}
                className={({isActive, isPending}) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-blue-600 underline "
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className={({isActive, isPending}) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-blue-600 underline "
                    : ""
                }
              >
                About
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({isActive, isPending}) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-blue-600 underline "
                    : ""
                }
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <Link to={"/"} className="text-2xl font-black text-blue-600">
            FirebaseRouterContext
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-4 px-1">
            <NavLink
              to={"/"}
              className={({isActive, isPending}) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active text-blue-600 underline text-lg"
                  : "text-lg"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({isActive, isPending}) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active text-blue-600 underline text-lg"
                  : "text-lg"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({isActive, isPending}) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active text-blue-600 underline text-lg"
                  : "text-lg"
              }
            >
              Contact
            </NavLink>
            {user && (
              <>
              <NavLink
                to={"/orders"}
                className={({isActive, isPending}) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-blue-600 underline text-lg"
                    : "text-lg"
                }
              >
                Orders
              </NavLink>
              <NavLink
                to={"/profile"}
                className={({isActive, isPending}) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active text-blue-600 underline text-lg"
                    : "text-lg"
                }
              >
                Profile
              </NavLink>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <>
              <p>{user?.email}</p>
              <button
                onClick={handleLogOut}
                className="btn normal-case text-lg bg-transparent border border-blue-500 border-solid rounded-2xl hover:bg-blue-600 hover:border-transparent text-blue-500 focus:outline-none min-h-0 h-10 hover:text-white"
              >
                Log out
              </button>
            </>
          ) : (
            <NavLink
              to={"/login"}
              className={({isActive, isPending}) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active btn capitalize text-lg rounded-2xl bg-blue-600 hover:bg-blue-700 border-none focus:outline-none min-h-0 h-10 text-slate-200 hover:text-white"
                  : "btn capitalize text-lg bg-transparent border border-blue-500 border-solid rounded-2xl hover:bg-blue-600 hover:border-transparent text-blue-500 focus:outline-none min-h-0 h-10 hover:text-white"
              }
            >
              Sign in
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
