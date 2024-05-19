import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
import featuredImg from "../../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section style={{ backgroundImage: `url(${featuredImg})` }} className="my-14 bg-fixed">
      <div className=" py-20 px-24 bg-black bg-opacity-50 text-white">
        <div>
          <SectionHeader
            subHeader="check out"
            header="Featured Items"
          ></SectionHeader>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="space-y-4">
            <p>Aug 20 2024</p>
            <p className="uppercase text-2xl font-semibold">
              {" "}
              where can i get some?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              adipisci distinctio accusamus pariatur, quibusdam, nihil facere
              neque mollitia dolorum corporis, voluptate necessitatibus
              consectetur blanditiis aperiam dolores. Perferendis laborum
              reprehenderit atque?
            </p>
            <button className="btn btn-outline border-0 border-b-2 border-t-2 text-white">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
