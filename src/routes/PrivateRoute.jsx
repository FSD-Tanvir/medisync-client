import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStateManager from "../hooks/useStateManager";
import Lottie from "lottie-react";
import medisync_loader from "../assets/Animations/medisync_loader.json"

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const { setShowModal } = useStateManager();
  

  if (loading) {
    return (<div className="flex justify-center items-center min-h-screen">
      <Lottie animationData={medisync_loader} loop={true} style={{width:"250px"}} />
    </div>)
  }
  if(user){
    return children;
  }
  if (!user) {
      if (!user) {
         setShowModal(true)
      }
    return <Navigate to="/" state={location.pathname} replace={true} />
  }
  
};

export default PrivateRoute;
