import "./App.css";
import Network from "./network.js";
import React from "react";
import MessageList from "./messageList";
import BlogHeader from "./BlogHeader";

class App extends React.Component {
  constructor() {
    super();
    this.state = { user: null };
  }

  getData(user) {
    this.setState({ user: user });
  }

  userLogin() {
    return this.state.user ? (
      <div className="website-login">
        <h1>Username: {this.state.user}</h1>
      </div>
    ) : (
      <span></span>
    );
  }

  render() {
    return (
      <div>
        <div className="website-content">
          <div className="website-header">
            <h1 className="website-name">MyTweetSpace</h1>

            {this.userLogin()}
          </div>
          <BlogHeader />
          <MessageList getUser={this.getData.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
