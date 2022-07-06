import React from "react";

const DishDetail = ({ dish }) => {
  const renderDish = (dish) => {
    if (dish != null)
      return (
        <div className={"row"}>
          <div className={"col-12 col-md-5 m-1"}>
            {/* <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card> */}
          </div>
          <div className={"col-12 col-md-5 m-1"}>
            <h1>Comments</h1>
            {renderComments(dish)}
          </div>
        </div>
      );
    else return <div></div>;
  };

  const renderComments = (dish) => {
    console.log(dish);
    const comments = dish.comments.map((comment) => {
      return (
        <div>
          <li className="list-unstyled">{comment.comment}</li>
          <li className="list-unstyled">
            {"--" + comment.author + ", " + comment.date}
          </li>
        </div>
      );
    });

    return comments;
  };

  return <></>;
};

export default DishDetail;
