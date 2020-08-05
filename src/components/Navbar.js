import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
class Navabar extends Component {
  state = {
    user: false,
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: false });
      }
      this.props.getUsersValue(user);
    });
  }

  signOut = () => {
    auth
      .signOut()
      .then(function (result) {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Blog Post!
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {this.state.user ? (
            <li className="nav-item">
              <Link className="nav-link" to="/createpost">
                Create Post
              </Link>
            </li>
          ) : null}

          {this.state.user ? (
            <li className="nav-item">
              <Link className="nav-link" onClick={this.signOut}>
                SignOut
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}
export default Navabar;
