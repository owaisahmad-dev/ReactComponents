import React from "react";
import Comment from "./Comment";

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

  return (
    <>
      <h1 class="font-semibold text-slate-900 text-3xl p-4">{dish.name}</h1>
      <img className="p-5 w-72 rounded" src={dish.image}></img>
      <p class="p-5">
        <em>That's a great choice!</em> <br />
        {dish.description}
      </p>
      <p className="p-5 text-slate-700 font-semibold">
        What people have to say?
      </p>
      {dish.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </>
  );
};

export default DishDetail;
