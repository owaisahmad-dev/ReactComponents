import React, { useState } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "./dishes";

const App = () => {
  const [dishes, setDishes] = useState(DISHES);
  return (
    <div className="App">
      {/* <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Fusion Restaurant</NavbarBrand>
        </div>
      </Navbar> */}
      <Menu dishes={dishes} />
    </div>
  );
};

export default App;
