import React, { Component } from "react";
import db from "../firebase";
import Post from "./Post";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    db.collection("posts")
      .get()
      .then((getData) => {
        getData.forEach((post) => {
          let data = post.data();
          let { id } = post;

          let payload = {
            id,
            ...data,
          };
          this.setState({
            posts: [...this.state.posts, payload],
          });
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="mt-4">
        {this.state.posts.map((post) => (
          <Post id={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    );
  }
}

export default Posts;
