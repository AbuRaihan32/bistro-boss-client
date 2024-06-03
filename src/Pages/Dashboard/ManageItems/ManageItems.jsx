import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useMenu from "../../../Hooks/useMenu";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const { menu, refetch } = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    console.log(item._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionHeader
        header="manage all items"
        subHeader="Hurry Up"
      ></SectionHeader>
      <div className="p-10 bg-white w-[90%] mx-auto">
        <h1 className="text-3xl">Total Items : {menu.length}</h1>

        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to={`/dashboard/menu/${item._id}`}>
                        <button className="btn bg-[#D1A054] text-white text-xl">
                          <FaRegEdit></FaRegEdit>
                        </button>
                      </Link>
                    </td>
                    <td>
                      {" "}
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn bg-[#B91C1C] text-white"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
