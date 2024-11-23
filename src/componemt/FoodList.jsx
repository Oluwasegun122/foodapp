import FoodDetails from "./FoodDetails";
import FoodItem from "./foodItem";
export default function FoodList({ foodData, setFoodId, foodId }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {/* <label
          for="my-drawer-2"
          className="hidden btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
        <FoodDetails foodId={foodId} />
      </div>
      <div className="drawer-side">
        {/* <label
          for="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label> */}
        <ul className=" menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here  */}
          <li>
            {foodData.map((food) => (
              <FoodItem setFoodId={setFoodId} food={food} key={food.id} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
