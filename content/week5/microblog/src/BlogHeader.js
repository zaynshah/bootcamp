import "./App.css";
import Network from "./network.js";
import React from "react";

class BlogHeader extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick(e) {
    e.preventDefault();
    const newPost = new Network();
    const userName = e.target.user.value.toString();
    const msg = e.target.message.value.toString();

    newPost.postMessage(msg, userName);
    setTimeout(() => window.location.reload(), 200);
  }

  render() {
    return (
      <div className="user-details">
        <form onSubmit={this.handleClick.bind(this)} action="*">
          <label>Nickname: </label>
          <input className="text-name" name="user" placeholder="Cheapmarlin"></input>
          <br />
          <label>Enter message: </label>
          <input className="text-message" name="message" placeholder="what is on your mind?"></input>
          <button className="btn">Post details</button>
          <hr />
        </form>
      </div>
    );
  }
}

export default BlogHeader;
