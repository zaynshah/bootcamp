class Network {
  async getURL(url) {
    const response = await fetch(url);
    const task = await response.json();
    return await task;
  }

  async postMessage(message, currentUser) {
    await fetch(`https://sigma-micro-blogging.herokuapp.com/${currentUser}`, {
      method: "POST",
      headers: {
        "content-type": "applications/json",
      },
      body: JSON.stringify({ message: message, from: currentUser }),
    });
  }

  async deleteMessage(currentUser, messageId, message) {
    await fetch(`https://sigma-micro-blogging.herokuapp.com/${currentUser}/${messageId}`, {
      method: "DELETE",
      headers: {
        "content-type": "applications/json",
      },
      body: JSON.stringify({ message: message, from: currentUser }),
    });
  }

  async editMessage(currentUser, messageId, message) {
    await fetch(`https://sigma-micro-blogging.herokuapp.com/${currentUser}/${messageId}`, {
      method: "PATCH",
      headers: {
        "content-type": "applications/json",
      },
      body: JSON.stringify({ message: message, from: currentUser }),
    });
  }
}

export default Network;
