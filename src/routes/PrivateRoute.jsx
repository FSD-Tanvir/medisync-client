import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStateManager from "../hooks/useStateManager";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const { setShowModal } = useStateManager();

  if (loading) {
    return <span>loading.....</span>;
  }
  if (!user) {
      if (!user) {
         setShowModal(true)
      }
    return <Navigate to="/" state={location.pathname} replace={true} />
  }
  return children;
};

export default PrivateRoute;
