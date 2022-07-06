import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ dishes, setSelectedDish }) => {
  const menu = dishes.map((dish) => {
    return (
      <MenuItem key={dish.id} dish={dish} setSelectedDish={setSelectedDish} />
    );
  });

  return (
    <div>
      <h1 className="font-semibold text-4xl text-slate-700 p-4">
        Select an Item from Menu to view details !
      </h1>
      <div className="flex flex-row p-4">{menu}</div>
    </div>
  );
};

export default Menu;
