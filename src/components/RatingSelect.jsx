import React from "react";
import { useState } from "react";

export default class RatingSelect extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selected : 10
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    let value = e.currentTarget.value;
    this.setState({selected:+value});
    this.props.select(this.state.selected);
  };

  makeSelectors() {
    let i = 0;
    let selectors = [];
    for (i = 0; i <= 10; i++) {
      selectors.push(
        <li key={i}>
          <input
            type="radio"
            id={`num${i}`}
            name="rating"
            value={i}
            onChange={this.handleChange}
            checked={this.state.selected === i}
          />
          <label htmlFor={`num${i}`}>{i}</label>
        </li>
      );
    }

    return selectors;
  };

  render() {
    return <ul className="rating">{this.makeSelectors()}</ul>;
  }
}