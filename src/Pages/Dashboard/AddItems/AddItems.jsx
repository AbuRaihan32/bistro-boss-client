import { useForm } from "react-hook-form";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

// ! img bb api and key
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // ! host image in img bb and get the url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_upload_api, imageFile, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });

    if (res.data.success) {
      // TODO: sent the data in database with items info
      const itemInfo = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: data.price,
        image: res.data.data.display_url,
      };
      const databaseRes = await axiosSecure.post("/menu", itemInfo);
      if (databaseRes.data.insertedId) {
        Swal.fire({
          title: "Added!",
          text: `${data.name}has been added.`,
          icon: "success",
        });
        reset();
      }
    }
    // console.log(res.data.data.display_url);
  };
  return (
    <div>
      <div>
        <SectionHeader
          subHeader="What's New?"
          header="Add an item"
        ></SectionHeader>
      </div>
      <div className="p-10 bg-white w-[90%] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Name: </span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex gap-5 mt-3">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Select Category: </span>
              </label>

              <select
                
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled selected >
                  select category
                </option>
                <option value="salad">salad</option>
                <option value="dessert">dessert</option>
                <option value="Pizza">Pizza</option>
                <option value="drinks">drinks</option>
                <option value="soup">soup</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price: </span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="label">
              <span className="label-text">Recipe Details:</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered w-full"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="mt-3">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn mt-3 rounded-none bg-gradient-to-r from-[#835D23] to-[#B58130] text-white px-7">
            {" "}
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
