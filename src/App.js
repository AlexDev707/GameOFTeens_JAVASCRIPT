import React, { Component } from "react";
import { initialState } from "./initialState/initialState";
import ChoicePage from './containers/ChoisePage/ChoicePage';

import styles from './App.module.css';

export default class App extends Component {
    state = initialState

    chooseCategory = (name) => {
        this.setState({
            currentCategory: name
        })

    }

  render() {
      console.log('currentCategory', this.state.currentCategory)
    return (
      <div className={styles.container}>
        <ChoicePage chooseCategory={this.chooseCategory} />
      </div>
    );
  }
}
