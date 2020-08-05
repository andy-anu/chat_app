import React, { Component } from "react";
import Posts from "./Posts";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";
import DetailedPost from "./DetailedPost";
import EditPost from "./EditPost";
import Navbar from "./Navbar";
import CreatePost from "./CreatePost";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { UserProvider } from "./UserContext";

class App extends Component {
  state = {
    user: false,
  };

  getUsersValue = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar getUsersValue={this.getUsersValue} />
        <div className="container">
          <UserProvider value={this.state.user}>
            <Route exact path="/" component={Posts} />
          </UserProvider>

          <Route path="/detailed/:id" component={DetailedPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
