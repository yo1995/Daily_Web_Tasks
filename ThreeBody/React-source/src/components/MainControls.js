import React, { Component } from 'react'
import Slider from './Slider'
import Checkbox from './Checkbox'
import './Controls.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MainControls extends Component {
  handleParamChange = param => {
    this.props.onChange(param)
  }

  toggleControls = () => {
    let value = !this.props.showControls
    this.handleParamChange({ name: 'showControls', value })
  }

  renderControls = () => {
    if (this.props.showControls)
      return (
        <div>
          <div className="title" id="msg-show">Global Settings</div>
          <Slider
            onChange={this.handleParamChange}
            property="g"
            value={this.props.g}
            min={0}
            max={4}
          />
          <Slider
            onChange={this.handleParamChange}
            property="speed"
            value={this.props.speed}
            min={0}
            max={100}
            step={1}
          />
          <Slider
            onChange={this.handleParamChange}
            property="zoom"
            value={this.props.zoom}
            min={1}
            max={100}
          />
		  <Slider
            onChange={this.handleParamChange}
            property="years"
            value={this.props.years}
            min={10}
            max={100}
			step={1}
          />
		  <div className="trailscontrol">
		  <Checkbox
            onChange={this.handleParamChange}
            property="showTrail1"
            label="Trail1"
            value={this.props.showTrail1}
            min={1}
            max={100}
          />
		  <Checkbox
            onChange={this.handleParamChange}
            property="showTrail2"
            label="Trail2"
            value={this.props.showTrail2}
            min={1}
            max={100}
          />
		  <Checkbox
            onChange={this.handleParamChange}
            property="showTrail3"
            label="Trail3"
            value={this.props.showTrail3}
            min={1}
            max={100}
          />
		  <i className="rocket" onClick={this.props.share}>
		  <FontAwesomeIcon icon="rocket"/>
		  </i>
		  <div id="modal"></div>
		  </div>
		  <div>
		  <button className="solution" onClick={this.props.setsolution1}>
            Two Body
          </button>
		  <button className="solution" onClick={this.props.setsolution2}>
            1P/Halley
          </button>
		  <button className="solution" onClick={this.props.setsolution3}>
            Duel Chanel
          </button>
		  <button className="solution" onClick={this.props.setsolution6}>
            Soleil-Sol-L4
          </button>
		  <button className="solution" onClick={this.props.setsolution4}>
            ???
          </button>
		  <button className="solution" onClick={this.props.setsolution7}>
            !!!
          </button>
		  <button className="solution" onClick={this.props.setsolution5}>
            Randomized!
          </button>
		  </div>
        </div>
      )
    return <div />
  }

  render() {
    return (
      <div className={`controls${this.props.showControls ? '' : ' hidden'}`}>
        {
          <button className="toggle" id="toggle" onClick={this.toggleControls}>
            {this.props.showControls ? '–' : '+'}
          </button>
        }
        {this.renderControls()}
      </div>
    )
  }
}

export default MainControls
