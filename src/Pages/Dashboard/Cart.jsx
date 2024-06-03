import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [carts, , refetch] = useCarts();
  const totalPrice = carts.reduce(
    (total, currentItem) => total + currentItem.price,
    0
  );

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly mb-10">
        <h2 className="text-4xl">Total orders: {carts.length}</h2>
        <h2 className="text-4xl">total price: {totalPrice}</h2>
        {carts.length ? (
          <Link to="/dashboard/payment">
            {" "}
            <button className="btn btn-outline text-yellow-600">PAY</button>
          </Link>
        ) : (
          <button disabled className="btn btn-outline text-yellow-600">
            PAY
          </button>
        )}
      </div>

      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>NO.</th>
                <th>Item image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {carts.map((cart, index) => (
                <tr key={cart._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cart.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{cart.name}</td>
                  <td>$ {cart.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(cart._id)}
                      className="btn bg-[#B91C1C] text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
