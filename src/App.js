import React, { Component } from "react";
import { Button } from "antd";
import { initialState } from "./initialState/initialState";
import ChoisePage from './containers/ChoisePage'

export default class App extends Component {
    state = initialState

    chooseCategory = () => {
        
    }

  render() {
    return (
      <div>
        <ChoisePage/>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}
