import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({children}) => {
    const {isAdmin, isPending} = useAdmin();
    const {user, loading} = useAuth();
    const location = useLocation();


    if(loading || isPending){
        return <div className="w-full h-svh flex justify-center items-center text-4xl font-semibold"><span> Loading... </span></div>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default AdminRoutes;