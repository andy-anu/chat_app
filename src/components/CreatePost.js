import React, { Component } from "react";
import db from "../firebase";

class CreatePost extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    db.collection("posts")
      .add(this.state)
      .then((doc) => console.log(doc.id))
      .catch((err) => console.log(err));

    this.setState({
      title: "",
      content: "",
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            className="form-control"
            name="title"
          />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea
            rows="10"
            value={this.state.content}
            onChange={this.handleChange}
            className="form-control"
            name="content"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          CreatePost
        </button>
      </form>
    );
  }
}

export default CreatePost;
