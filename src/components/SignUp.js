import React, { Component } from "react";
import { auth } from "../firebase";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => (result ? this.props.history.push("/signin") : null))
      .catch(function (error) {
        // Handle Errors here.
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div className="container mt-4">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control"
              name="password"
            />
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default SignUp;
