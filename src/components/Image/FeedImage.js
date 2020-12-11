import React from "react";

import "./Image.css";

const FeedImage = props => {
  console.log(`${process.env.REACT_APP_BASE_URL}/${props.imageUrl}`);
  return (
    <div
      className="image"
      style={{
        backgroundImage: `url('${process.env.REACT_APP_BASE_URL}/${props.imageUrl}')`,
        backgroundSize: props.contain ? "contain" : "cover",
        backgroundPosition: props.left ? "left" : "center"
      }}
    />
  );
};

export default FeedImage;
