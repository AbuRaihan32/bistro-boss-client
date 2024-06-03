import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home </title>
      </Helmet>
      <Banner></Banner>
      <div className="w-[80%] mx-auto">
        <Category></Category>
        <Boss></Boss>
        <PopularMenu></PopularMenu>
      </div>
      <Featured></Featured>
      <div className="w-[80%] mx-auto">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
