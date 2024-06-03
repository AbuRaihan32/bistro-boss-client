import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(res=>{
            const user = {
                name: res.user?.displayName,
                email: res.user?.email
            }
            axiosPublic.post('/users', user)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
        })
    }


  return (
    <div className="card-body pt-0">
      <div className="divider">OR</div>
      <div className="flex justify-center gap-5">
        <button onClick={handleGoogleLogin} className="btn btn-outline rounded-full text-[#D1A054] hover:bg-[#D1A054]">
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-outline rounded-full text-[#D1A054] hover:bg-[#D1A054]">
          <FaGithub></FaGithub>
        </button>
        <button className="btn btn-outline rounded-full text-[#D1A054] hover:bg-[#D1A054]">
          <FaFacebook></FaFacebook>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
