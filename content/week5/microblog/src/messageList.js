import "./App.css";
import Network from "./network.js";
import MessageFormat from "./MessageFormat";
import React from "react";

class MessageList extends React.Component {
  constructor() {
    super();
    this.state = { messageInfo: null, user: null, messageLists: null, isValid: false };
  }
  async componentDidMount() {
    const messageList = await new Network().getURL(`https://sigma-micro-blogging.herokuapp.com/`);

    this.setState({ messageInfo: messageList });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = e.target.search.value;
    this.setState({ user: user, messageLists: this.getMessageList() });

    this.props.getUser(user);
  }

  check() {
    if (this.state.user == null) {
      return 0;
    } else {
      return 0;
    }
  }

  getMessageList() {
    const messageList = this.state.messageInfo["messages"].map((j, i) => {
      return <MessageFormat key={Math.random()} data={j} isValid={this.state.user} />;
    });

    return messageList;
  }

  getPersonHistory() {
    let userTweets = [];
    const specificTweets = this.state.messageLists.forEach((j, i) => {
      if (j.props["data"]["from"] === this.state.user) {
        userTweets.push(<MessageFormat key={Math.random()} data={j.props["data"]} isValid={this.state.user} />);
      }
    });
    return userTweets;
  }

  showAllOrSpecificTweets() {
    if (this.state.user == null) {
      return this.getMessageList();
    } else if (this.getPersonHistory().length > 0) {
      return this.getPersonHistory();
    } else {
      return (
        <div>
          <span>User not found</span>
          <br />
          <form>
            <button>Return Back to Main</button>
          </form>
        </div>
      );
    }
  }

  render() {
    if (!this.state.messageInfo) return <div className="main-section">Loading...</div>;
    return (
      <div className="tweets">
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Enter Username: </label>
            <input className="username" name="search" placeholder="SigmaStudent99"></input>
            <button className="btn">Search</button>
          </form>
        </div>
        {this.showAllOrSpecificTweets()}
      </div>
    );
  }
}

export default MessageList;
