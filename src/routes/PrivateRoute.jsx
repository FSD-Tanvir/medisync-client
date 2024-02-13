import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const location = useLocation()

    const {user,loading} = useAuth()
    if(loading){
        return <span>loading.....</span>
    }
    if(!user){
        return (<Navigate to="/" replace={true}/>
        )

    }
    return children;
};

export default PrivateRoute;