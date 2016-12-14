import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child.component.js';

const Parent = React.createClass({
  getInitialState() {
    return {
      name: "Wesley",
    }
  },
  render() {
    return (
      <div>
        {this.state.name}
        <Child
          changeName={this.changeName.bind(this)}
          superName={this.state.name}/>
      </div>
    )
  },
  changeName(name) {
    this.setState({
      name: name,
    })
  }
});

ReactDOM.render(<Parent />, document.getElementById("app"));
