import React, { Component } from 'react';
import "./main.css"

class Main extends Component {

	constructor(props) {
    super(props);
    this.state = {value: 'Dharwad'};
  }

  handleChange = (event) =>
    this.setState({value: event.target.value});

  render() {
    return (
      <div id="content w-full">
       <div className="firstPart w-1/2 bg-green-600">
        <h2>Welcome To <br /> Farmingo....</h2>
        <p>Unleash the new World</p>

        <div className="buttons">
          <button>Farmer</button>
          <button>Buyer</button>
          <button>Admin</button>

        </div>
       </div>
       <div className="secondPart"></div>
      </div>
    );
  }
}

export default Main;
