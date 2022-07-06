import React, { useState } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../../data/dishes";
import Navbar from "./Navbar";
import DishDetails from "./DishDetailComponent";
import { useEffect } from "react";

const App = () => {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    console.log({ selectedDish });
  }, [selectedDish]);

  return (
    <div>
      <Navbar />
      <div className="flex width-100">
        <div className="flex-1">
          <Menu dishes={dishes} setSelectedDish={setSelectedDish} />
        </div>
        <div className="flex-1">
          {selectedDish != null ? <DishDetails dish={selectedDish} /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default App;
