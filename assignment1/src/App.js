import { IconContext } from "react-icons";
import { GrBasket } from 'react-icons/gr'
import BasketList from "./components/BasketList";
import GroceryList from "./components/GroceryList";
import groceryData from "./data";

function App() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 100, className: "basket" }}>
      <div className="App">
        <header className='bg-[#222] h-[186px] text-white flex justify-center items-center flex-col'>
          <GrBasket />
          <h1 className="text-xl font-bold pt-4">Hello, Basket!</h1>
        </header>
        <main className="flex justify-center items-center px-6">
          <GroceryList groceryData={groceryData} />
          <BasketList />
        </main>
      </div>
    </IconContext.Provider>
  );
}

export default (App);
