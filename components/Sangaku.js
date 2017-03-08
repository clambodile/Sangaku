import React, { Component, PropTypes } from 'react';
import Point from '../geometry/Point';
import proposition1 from '../euclids_elements/proposition1';

export default class Sangaku extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const ctx = document.getElementById(this.props.name).getContext('2d');
    const a = new Point(170, 175, "A");
    const b = new Point(220, 175, "B");
    proposition1(ctx, a, b);
  }

  render() {
    return (
      <canvas width={this.props.width} height={this.props.height} id={this.props.name}>
      </canvas>
    );
  }
}

Sangaku.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
