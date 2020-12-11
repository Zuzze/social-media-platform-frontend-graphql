import React, { Component } from "react";

import Image from "../../../components/Image/Image";
import "./Post.css";

class Post extends Component {
  state = {
    title: "",
    author: "",
    date: "",
    image: "",
    content: ""
  };

  componentDidMount() {
    const postId = this.props.match.params.postId;
    const graphqlQuery = {
      query: `{
        post(id: "${postId}") {
          title
          content
          imageUrl
          creator {
            name
          }
          createdAt
        }
      }
      `
    };
    fetch(`${process.env.REACT_APP_BASE_URL}/graphql`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + this.props.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        if (resData.errors) {
          throw new Error(resData.errors[0].message);
        }
        this.setState({
          title: resData.data.post.title,
          author: resData.data.post.creator.name,
          image: `${process.env.REACT_APP_BASE_URL}/${resData.data.post.imageUrl}`,
          date: new Date(resData.data.post.createdAt).toLocaleDateString(
            "en-US"
          ),
          content: resData.data.post.content
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <section className="single-post">
        <a href="/">back</a>
        <h1>{this.state.title}</h1>
        <h2>
          Created by {this.state.author} on {this.state.date}
        </h2>
        <div className="single-post__image">
          <Image contain imageUrl={this.state.image} />
        </div>
        <p>{this.state.content}</p>
      </section>
    );
  }
}

export default Post;
