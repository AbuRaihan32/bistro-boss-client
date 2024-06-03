import Cover from "../../Shared/Cover/Cover";
import menuCoverImg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const Menu = () => {
  const { menu } = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      {/* main cover */}
      <Cover img={menuCoverImg} title="our menu"></Cover>

      {/* offered Menu */}
      <div className="my-10">
        <SectionHeader
          subHeader="Don't Miss"
          header="Today's Offers"
        ></SectionHeader>
        <MenuCategory menus={offered} btnText='ORDER YOUR FAVOURITE FOOD'></MenuCategory>
      </div>

      {/* dessert Menu */}
      <div className="my-10">
        <MenuCategory menus={dessert} menuCoverImg={dessertBg} title='dessert' btnText='ORDER YOUR FAVOURITE DESSERT'></MenuCategory>
      </div>

      {/* pizzas Menu */}
      <div className="my-10">
        <MenuCategory menus={pizza} menuCoverImg={pizzaBg} title='pizzas' btnText='ORDER YOUR FAVOURITE PIZZA'></MenuCategory>
      </div>

      {/* salad Menu */}
      <div className="my-10">
        <MenuCategory menus={salad} menuCoverImg={saladBg} title='salads' btnText='ORDER YOUR FAVOURITE SALAD'></MenuCategory>
      </div>

      {/* soup Menu */}
      <div className="my-10">
        <MenuCategory menus={soup} menuCoverImg={soupBg} title='soups' btnText='ORDER YOUR FAVOURITE SOUP'></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
