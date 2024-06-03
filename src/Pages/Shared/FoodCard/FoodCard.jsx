import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCarts from "../../../Hooks/useCarts";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [, , refetch] = useCarts();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const foodItem = {
        foodId: food._id,
        email: user.email,
        name: food.name,
        image: food.image,
        price: food.price
      }
      axiosSecure.post('/carts', foodItem)
      .then(res =>{
        if(res.data.insertedId){
          Swal.fire({
            title: "Added",
            text: "Your food has been added in cart.",
            icon: "success"
          });
          refetch();
        }
      })


    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "Please Login To add the item in cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I want to login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from: location}});
        }
      });
    }
  };

  return (
    <div>
      <div className="bg-[#F3F3F3] text-center relative">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="px-3 py-1 bg-black absolute text-white top-3 right-3">
          $ {price}
        </p>
        <div className="card-body space-y-1 flex">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="">{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] hover:text-[#BB8506]"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
