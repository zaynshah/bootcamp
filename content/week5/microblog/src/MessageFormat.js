import "./App.css";
import Network from "./network.js";
import React from "react";

class MessageFormat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null, edit: false, disabled: false };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newDel = new Network();

    newDel.deleteMessage(this.props.data["from"], this.props.data["id"], this.props.data["message"]);
    setTimeout(() => window.location.reload(), 200);
  }

  userValid(a) {
    return this.props.isValid ? (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button className="btn">Delete Post!</button>
        </form>
        <button className="btn" disabled={this.state.edit} onClick={this.handleClick.bind(this)}>
          Edit
        </button>
      </div>
    ) : (
      <span></span>
    );
  }
  handleClick(e) {
    this.setState({ edit: true });
  }
  addEdit() {
    return this.state.edit ? (
      <div>
        <form onSubmit={this.handleEditSubmit.bind(this)}>
          <label>Edit post: </label>
          <input className="edit-post" name="msg" placeholder="Edi message"></input>
          <button className="btn">Confirm</button>
        </form>
      </div>
    ) : (
      <span></span>
    );
  }

  handleEditSubmit(e) {
    e.preventDefault();
    let newMsg = e.target.msg.value;
    const newEdit = new Network();
    newEdit.editMessage(this.props.data["from"], this.props.data["id"], newMsg);
    setTimeout(() => window.location.reload(), 200);
  }

  render() {
    return (
      <div className="single-tweets">
        <span>Nickname: {this.props.data["from"]}</span>
        <br />
        <span>Message: {this.props.data["message"]}</span>
        <br />
        <span>Time Posted: {new Date(this.props.data["timestamp"]).toString().slice(0, 25)}</span>
        <br />
        {this.userValid()}
        {this.addEdit()}
      </div>
    );
  }
}

export default MessageFormat;
