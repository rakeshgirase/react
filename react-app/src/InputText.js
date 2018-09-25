import React, { Component } from "react";

class InputText extends Component {
  componentWillReceiveProps(newProps) {
    if (this.input.value !== newProps.value) {
      this.input.value = newProps.value;
    }
  }

  onChange = () => {
    const value = this.input.value;
    this.props.onChange({ value: value, prop: this.props.prop });
  };

  render() {
    return (
      <div className="form-group">
        <label>{this.props.children}</label>
        <input
          id={this.props.prop + "Input"}
          type="text"
          className="form-control"
          ref={el => (this.input = el)}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default InputText;
