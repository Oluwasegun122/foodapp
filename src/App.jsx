import { useState } from "react";
import Header from "./componemt/header";
import FoodList from "./componemt/FoodList";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="hidden md:block">
      <Header foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodId={foodId} setFoodId={setFoodId} foodData={foodData} />
    </div>
  );
}
