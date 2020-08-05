import React, { Component } from "react";
import db from "../firebase";

class DetailedPost extends Component {
  state = {
    title: "",
    content: "",
  };

  componentDidMount() {
    db.collection("posts")
      .get()
      .then((getData) => {
        getData.forEach((post) => {
          let { title, content } = post.data();
          let { id } = post;
          if (this.props.match.params.id === id) {
            this.setState({
              title: title,
              content: content,
            });
          }
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default DetailedPost;
