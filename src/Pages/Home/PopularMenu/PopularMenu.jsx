import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const popularItem = data.filter(item => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);

  return (
    <section className="my-14">
      <div>
        <SectionHeader
          subHeader={"Popular Items"}
          header={"from our menu"}
        ></SectionHeader>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
