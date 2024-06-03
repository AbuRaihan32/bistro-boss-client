import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((food) => (
        <FoodCard key={food._id} item={food}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
