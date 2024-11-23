import { useState } from "react";
import Header from "./componemt/header";
import FoodList from "./componemt/FoodList";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div>
      <div className="h md:hidden ">
        <h1 className="text-5xl">
          To Have Acces To This FoodApp, Please Use Your PC
        </h1>
      </div>
      <div className="hidden md:block">
        <Header foodData={foodData} setFoodData={setFoodData} />
        <FoodList foodId={foodId} setFoodId={setFoodId} foodData={foodData} />
      </div>
    </div>
  );
}
