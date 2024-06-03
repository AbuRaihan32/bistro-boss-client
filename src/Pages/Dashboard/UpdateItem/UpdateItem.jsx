import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { useQuery } from "@tanstack/react-query";

// ! img bb api and key
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();


  const {data: menu = [], refetch} = useQuery({
    queryKey: ['singleMenu'],
    queryFn: async () =>{
        const menuRes = await axiosPublic.get(`/dashboard/menu/${id}`)
        return menuRes.data;
    }
  })


  const { register, handleSubmit} = useForm();

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
      const databaseRes = await axiosSecure.patch(`/dashboard/menu/${menu._id}`, itemInfo);
      if (databaseRes.data.modifiedCount > 0) {
        Swal.fire({
          title: "Updated!",
          text: `Updated successfully.`,
          icon: "success",
        });
        refetch();
      }
    }
    // console.log(res.data.data.display_url);
  };

  return (
    <div>
      <div>
        <SectionHeader subHeader="Update" header="Update item"></SectionHeader>
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
              defaultValue={menu?.name}
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
              defaultValue={menu?.category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled defaultValue='default'>
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
                defaultValue={menu?.price}
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
              defaultValue={menu?.recipe}
            ></textarea>
          </div>
          <div className="mt-3">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="btn mt-3 rounded-none bg-gradient-to-r from-[#835D23] to-[#B58130] text-white px-7">
              {" "}
              Update Menu Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
