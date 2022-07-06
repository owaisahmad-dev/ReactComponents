import React, { useState } from "react";

import DishDetails from "./DishDetailComponent";

const Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const menu = this.props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        {/* <Card key={dish.id}
                  onClick={() => setSelectedDish(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card> */}
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      {selectedDish != null ? <DishDetails dish={selectedDish} /> : <div></div>}
    </div>
  );
};

export default Menu;
