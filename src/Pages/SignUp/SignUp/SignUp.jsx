import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile, logoutUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const user = {
      name: data.name,
      email: data.email,
    };
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name, data.photo)
          .then(() => {})
          .catch((err) => {
            console.error(err);
          });

        axiosPublic.post("/users", user).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            logoutUser()
              .then(() => {})
              .catch((err) => {
                console.log(err);
              });
            navigate("/login");
          }
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen w-[80%] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  name="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-rose-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-rose-600">Photo is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type Here"
                  name="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-rose-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z]/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-rose-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-rose-600">
                    password must be gater then 6{" "}
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-rose-600">
                    password must be less then 20{" "}
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-rose-600">reg </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#D1A054B3] text-white">
                  Sign Up
                </button>
              </div>

              <p className="text-[#D1A054] text-[18px] font-semibold text-center">
                Already Registered ?{" "}
                <Link to={"/login"}>
                  <span className="font-bold">Go to Login</span>
                </Link>
              </p>
            </form>
            {/* social login */}
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
