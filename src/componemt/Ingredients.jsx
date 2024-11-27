export default function Ingredients({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Ingredients
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Ingredients</h3>
              <div className="py-4 grid grid-cols-4 gap-4">
                {food.extendedIngredients.map((item) => (
                  <div className="">
                    <div key={item.id}>
                      <img
                        src={
                          `https://spoonacular.com/cdn/ingredients_100x100/` +
                          item.image
                        }
                        alt=""
                      />
                      <div className="">
                        <h1>{item.name}</h1>
                        <h1>
                          {item.amount} {item.unit}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </>
      )}
    </div>
  );
}
