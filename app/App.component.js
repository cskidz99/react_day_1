import ReactDOM from 'react-dom';
import React from 'react';

var App = React.createClass({
  getInitialState() {
    return {
      name: 'cameron',
      email: 'cskidz99@gmail.com',
      friends: [
        {name: "Brian"},
        {name: "Sterling"},
        {name: "Gustav"},
        {name: "Josh"},
        {name: "Elisssshaaa"},
      ]
    };
  },
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.clickHandler}>
          Greg State
        </button>
        <input onChange={this.inputHandler}/>
        {this.state.friends
          .filter((friend) => {
            return friend.name !== "Josh"
          })
          .map((friend) => {
          return (
            <div
            onClick={this.friendNamer.bind(this, friend.name)}
            key={friend.name}>
              {friend.name}
            </div>
          )
        })}
      </div>
    )
  },
  inputHandler(event) {
    this.setState({
      name: event.target.value,
    });
  },
  clickHandler() {
    this.setState({
      name: "Greg",
    });
  },
  friendNamer(name) {
    this.setState({
      name: name,
    })
  },
});

ReactDOM.render(<App />, document.getElementById("app"));
