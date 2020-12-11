import React from "react";
import FeedImage from "../../Image/FeedImage";
import Button from "../../Button/Button";
import "./Post.css";

const post = props => {
  console.log(props.image);
  return (
    <article className={props.isOwnPost ? "post creator" : "post"}>
      <header className="post__header">
        <h1 className="post__title">{props.title}</h1>
        <div className="post__content-wrapper">
          <p className="post__content">{props.content}</p>
          <h3 className="post__meta">
            Posted by {props.author} on {props.date}
          </h3>
          <br />
          <div className="post__image">
            <FeedImage imageUrl={props.image} contain />
          </div>
          <br />
          <div className="post__actions">
            <Button mode="flat" link={props.id}>
              View
            </Button>
            {props.isOwnPost && (
              <Button mode="flat" onClick={props.onStartEdit}>
                Edit
              </Button>
            )}
            {props.isOwnPost && (
              <Button mode="flat" design="danger" onClick={props.onDelete}>
                Delete
              </Button>
            )}
          </div>
        </div>
      </header>
    </article>
  );
};

export default post;
