
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

  const {menu} = useMenu();
  const popularMenu = menu.filter(item => item.category === "popular");

  return (
    <section className="my-14">
      <div>
        <SectionHeader
          subHeader={"Popular Items"}
          header={"from our menu"}
        ></SectionHeader>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
