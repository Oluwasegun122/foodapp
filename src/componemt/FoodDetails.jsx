import { useState, useEffect } from "react";
import Ingredients from "./Ingredients";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "2709ccbbe8274d2bb1a9d55fb793e557";

  useEffect(() => {
    async function fetchFood() {
      try {
        const rep = await fetch(`${URL}?apiKey=${API_KEY}`);

        if (!rep.ok) {
          throw new Error(`HTTP error! status: ${rep.status}`);
        }

        const data = await rep.json();
        console.log(data); // Debugging: Check the data
        setFood(data); // Set the food details in state
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    }

    if (foodId) {
      fetchFood();
    }
  }, [foodId, URL]); // Ensure effect re-runs if `foodId` changes
  return (
    <div>
      <div className="card bg-base-100 w-width-size shadow-xl">
        <figure>
          <img className="rounded-md" src={food.image} alt="item image" />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl">{food.title}</h2>
          <div className="badge badge-secondary">
            👨‍👦‍👦 Servings: {food.servings}
          </div>
          <div className="badge badge-secondary">
            {" "}
            Ready In 🕓
            {food.readyInMinutes} Minutes
          </div>
          <div className="badge badge-secondary">
            {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
          </div>
          <div className="badge badge-secondary">
            {food.vegan ? "Vegan" : "Non-Vegan"}
          </div>
          <div className="badge badge-secondary">
            ₦{(food.pricePerServing / 100) * 1500}
          </div>
          <h2 className="text-2xl font-semibold">Information</h2>
          {isLoading ? (
            <h1>Loadind...</h1>
          ) : (
            <p>
              {food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </p>
          )}

          <div className="card-actions justify-end">
            <Ingredients food={food} isLoading={isLoading} key={food.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
