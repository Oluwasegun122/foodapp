export default function FoodItem({ food, setFoodId }) {
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={food.image} />
        </div>
      </div>
      <p key={food.id}>{food.title}</p>
      <button
        onClick={() => {
          console.log(food.id);
          setFoodId(food.id);
        }}
        className="btn btn-outline btn-success"
      >
        View Recipe
      </button>
    </div>
  );
}
