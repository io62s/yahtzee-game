import React, { Component } from "react";
import "./Die.css";

const numberWords = ["one", "two", "three", "four", "five", "six"];

class Die extends Component {
  toggleLock = () => {
    this.props.handleClick(this.props.idx);
  };

  render() {
    const { locked, val, disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) classes += "Die-locked";
    if (rolling) classes += "Die-rolling";
    return (
      <i className={classes} onClick={this.toggleLock} disabled={disabled} />
    );
  }
}

export default Die;
