import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import "./Inputs.css";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      input3: ""
    };
  }

  onChangeText(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { input1, input2, input3 } = this.state;
    return (
      <div>
        <TextField
          label="Input 1"
          name="input1"
          onChange={e => this.onChangeText(e)}
          value={input1}
        />

        <TextField
          label="Input 2"
          name="input2"
          onChange={e => this.onChangeText(e)}
          value={input2}
        />

        <TextField
          label="Input 3"
          name="input3"
          onChange={e => this.onChangeText(e)}
          value={input3}
        />
      </div>
    );
  }
}

export default Inputs;
