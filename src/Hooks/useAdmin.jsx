import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: isAdmin, isPending} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data;
        }
    })
    console.log(isAdmin?.admin)
    return {isAdmin: isAdmin?.admin, isPending}
};

export default useAdmin;