import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ menus, menuCoverImg, title, btnText }) => {
  return (
    <div>
      {title && <Cover img={menuCoverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 w-[80%] mx-auto mt-16">
        {menus.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-9">
        <Link to={`/order/${title? title : 'offered'}`}>
          <button className="btn btn-outline border-0 border-b-2 border-t-2 text-black">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
