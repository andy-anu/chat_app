import React, { Component } from "react";
import db from "../firebase";

class EditPost extends Component {
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    db.collection("posts")
      .doc(this.props.match.params.id)
      .update(this.state)
      .then(console.log("doc updated"))
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
          <label>Title: </label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            name="title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Content: </label>
          <input
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
            name="content"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default EditPost;
