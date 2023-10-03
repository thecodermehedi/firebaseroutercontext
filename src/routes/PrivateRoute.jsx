import PropTypes from "prop-types";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import {Navigate} from "react-router-dom";
import Loading from "./../components/Loading/Loading";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
