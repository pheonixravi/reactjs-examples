import React from "react";
import "../App.css";
const BlogCard = (props) => {
  console.log(props);
  return (
    <div className="BlogCards">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default BlogCard;
