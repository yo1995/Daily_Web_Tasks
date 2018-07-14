import React, { Component } from 'react'

class Checkbox extends Component {
  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.checked
    this.props.onChange({ name, value })
  }

  render() {
    return (
      <div>
		<input
          type="checkbox"
		  style={{display:'none'}}
          checked={this.props.value}
          name={this.props.property}
          id={this.props.property}
          onChange={this.handleInputChange}
		  ></input>
		<label className={"slider-v0 " + this.props.property} htmlFor={this.props.property}></label>
			{/*{this.props.label || this.props.property}{' '}*/}
      </div>
    )
  }
}

export default Checkbox
