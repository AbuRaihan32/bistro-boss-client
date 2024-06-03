import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



const PrivetRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();


    if(loading){
        return <div className="w-full h-svh flex justify-center items-center text-4xl font-semibold"><span> Loading... </span></div>
    }

    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivetRoutes;