import React from "react";
import "../App.css";

import classes from "./BlogCard.module.css";
const BlogCard = (props) => {
  console.log(props);
  return (
    <div className={classes.BlogCards}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default BlogCard;
