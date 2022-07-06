import React from "react";

const MenuItem = ({ dish, setSelectedDish }) => {
  return (
    <div className="relative m-2">
      <img className="w-56" src={dish.image} alt=""></img>
      <div
        onClick={() => setSelectedDish(dish)}
        className="
      opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity duration-200 absolute inset-0 z-10 flex flex-col justify-center items-center text-2xl text-white font-semibold hover:bg-teal-700/75
      "
      >
        {dish.name}
      </div>
    </div>
  );
};

export default MenuItem;
