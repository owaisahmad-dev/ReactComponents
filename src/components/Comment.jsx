import React from "react";

const Comment = ({ comment }) => {
  console.log({ comment });
  return (
    <div className="p-5 block w-100">
      <p>
        <span>{comment.comment}</span>
        <br />~<span className="text-gray-500">{comment.author}</span>
        <span className="text-gray-500">
          on {new Date(comment.date).toTimeString()}
        </span>
      </p>
    </div>
  );
};

export default Comment;
