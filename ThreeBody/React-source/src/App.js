import React, { Component } from 'react'
import MainControls from './components/MainControls'
import BodyControls from './components/BodyControls'
import Scene from './components/Scene'
import Loader from './components/Loader'
import copy from 'copy-to-clipboard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

library.add(faRocket)

const random = (low, high) => +(Math.random() * (high - low) + low).toFixed(3)

class App extends Component {
  constructor(props) {
    super(props)

    let speed,
      g,
      zoom,
      showTrail1,
	  showTrail2,
	  showTrail3,
	  years,
      showControls = true
    let bodies = [0, 1, 2].map(n => ({
      number: n,
      params: { m: '', x: '', y: '', z: '', vx: '', vy: '', vz: '' }
    }))
	
	const display_path = '/Daily_Web_Tasks/threebody'
	
    const params = window.location.pathname
      .split('/')
      .slice(3)
      .map(param => +param)
    window.history.pushState(null, '', window.location.origin + display_path)

    if (params.length === 28) {
      speed = params[0]
      g = params[1]
      zoom = params[2]
      showTrail1 = Boolean(params[3])
	  showTrail2 = Boolean(params[4])
	  showTrail3 = Boolean(params[5])
	  years = params[6]
      bodies.forEach((body, i) => {
        Object.keys(body.params).forEach(
          (param, j) => (body.params[param] = params[i * 7 + j + 7])
        )
      })
    } else {
      speed = 10
      g = 1
      zoom = 5
      showTrail1 = true
	  showTrail2 = true
	  showTrail3 = true
	  years = 50
      bodies.forEach(body => {
        Object.keys(body.params).forEach(
          param => (body.params[param] = param === 'm' ? random(0, 1) : random(-1, 1))
        )
      })
    }

    this.state = { bodies, speed, g, zoom, showTrail1, showTrail2, showTrail3, years, showControls }
  }

  handleBodyChange = ({ number, param }) => {
    const bodies = this.state.bodies
    bodies[number].params[param.name] = param.value
    this.setState({ bodies })
  }

  handleParamChange = ({ name, value }) => {
    this.setState({ [name]: value })
  }
  
  setSolution1 = () => {
	  const bodies = this.state.bodies
	  /* first body settings */
	  bodies[0].params['m'] = 0.01
	  bodies[0].params['x'] = -1.5
	  bodies[0].params['y'] = -0.5
	  bodies[0].params['z'] = 0
	  bodies[0].params['vx'] = 0
	  bodies[0].params['vy'] = 10
	  bodies[0].params['vz'] = 0
	  /* second body settings */
	  bodies[1].params['m'] = 100
	  bodies[1].params['x'] = -0.5
	  bodies[1].params['y'] = -0.4
	  bodies[1].params['z'] = 0
	  bodies[1].params['vx'] = 0
	  bodies[1].params['vy'] = 0
	  bodies[1].params['vz'] = 0
	  /* third body settings */
	  bodies[2].params['m'] = 0
	  bodies[2].params['x'] = 100
	  bodies[2].params['y'] = 0
	  bodies[2].params['z'] = 0
	  bodies[2].params['vx'] = 0
	  bodies[2].params['vy'] = 0
	  bodies[2].params['vz'] = 0
	  this.setState({ bodies })
	  this.setState({ speed : 15})
	  this.setState({ g : 1})
  }
  
  setSolution2 = () => {
	  const bodies = this.state.bodies
	  /* first body settings */
	  bodies[0].params['m'] = 1
	  bodies[0].params['x'] = -2
	  bodies[0].params['y'] = -0.5
	  bodies[0].params['z'] = 0
	  bodies[0].params['vx'] = 0
	  bodies[0].params['vy'] = 10
	  bodies[0].params['vz'] = 0
	  /* second body settings */
	  bodies[1].params['m'] = 1000
	  bodies[1].params['x'] = 0
	  bodies[1].params['y'] = -0.5
	  bodies[1].params['z'] = 0
	  bodies[1].params['vx'] = 0
	  bodies[1].params['vy'] = 0
	  bodies[1].params['vz'] = 0
	  /* third body settings */
	  bodies[2].params['m'] = 0.001
	  bodies[2].params['x'] = -1.99
	  bodies[2].params['y'] = -0.5
	  bodies[2].params['z'] = 0
	  bodies[2].params['vx'] = 0
	  bodies[2].params['vy'] = 0
	  bodies[2].params['vz'] = 12
	  this.setState({ bodies })
	  this.setState({ speed : 15})
	  this.setState({ g : 0.2})
  }
  
  setSolution3 = () => {
	  const bodies = this.state.bodies
	  /* first body settings */
	  bodies[0].params['m'] = 0.01
	  bodies[0].params['x'] = -1
	  bodies[0].params['y'] = -0.5
	  bodies[0].params['z'] = 0
	  bodies[0].params['vx'] = 0
	  bodies[0].params['vy'] = 10
	  bodies[0].params['vz'] = 0
	  /* second body settings */
	  bodies[1].params['m'] = 100
	  bodies[1].params['x'] = 0
	  bodies[1].params['y'] = -0.5
	  bodies[1].params['z'] = 0
	  bodies[1].params['vx'] = 0
	  bodies[1].params['vy'] = 0
	  bodies[1].params['vz'] = 0
	  /* third body settings */
	  bodies[2].params['m'] = 0.01
	  bodies[2].params['x'] = 1
	  bodies[2].params['y'] = -0.5
	  bodies[2].params['z'] = 0
	  bodies[2].params['vx'] = 0
	  bodies[2].params['vy'] = -10
	  bodies[2].params['vz'] = 0
	  this.setState({ g : 0.65})
	  this.setState({ years: 17})
	  this.setState({ speed : 15})
	  this.setState({ bodies })
  }
  
  setSolution4 = () => {
	  const bodies = this.state.bodies
	  /* first body settings */
	  bodies[0].params['m'] = 1
	  bodies[0].params['x'] = -0.97
	  bodies[0].params['y'] = 0.243
	  bodies[0].params['z'] = 0
	  bodies[0].params['vx'] = -0.466
	  bodies[0].params['vy'] = -0.433
	  bodies[0].params['vz'] = 0
	  /* second body settings */
	  bodies[1].params['m'] = 1
	  bodies[1].params['x'] = 0.97
	  bodies[1].params['y'] = -0.243
	  bodies[1].params['z'] = 0
	  bodies[1].params['vx'] = -0.466
	  bodies[1].params['vy'] = -0.433
	  bodies[1].params['vz'] = 0
	  /* third body settings */
	  bodies[2].params['m'] = 1
	  bodies[2].params['x'] = 0
	  bodies[2].params['y'] = 0
	  bodies[2].params['z'] = 0
	  bodies[2].params['vx'] = 0.9324
	  bodies[2].params['vy'] = 0.8646
	  bodies[2].params['vz'] = 0
	  this.setState({ g : 1})
	  this.setState({ speed : 20})
	  this.setState({ bodies })
  }
  
  setSolution5 = () => {
	  const bodies = this.state.bodies
	  /* first body settings */
	  bodies[0].params['m'] = random(0.5, 1)
	  bodies[0].params['x'] = random(-2, 2)
	  bodies[0].params['y'] = random(-1, 1)
	  bodies[0].params['z'] = random(-0.5, 0.5)
	  bodies[0].params['vx'] = random(-0.5, 0.5)
	  bodies[0].params['vy'] = random(-0.5, 0.5)
	  bodies[0].params['vz'] = random(-0.5, 0.5)
	  /* second body settings */
	  bodies[1].params['m'] = random(0.5, 1)
	  bodies[1].params['x'] = random(-2, 2)
	  bodies[1].params['y'] = random(-1, 1)
	  bodies[1].params['z'] = random(-0.5, 0.5)
	  bodies[1].params['vx'] = random(-0.5, 0.5)
	  bodies[1].params['vy'] = random(-0.5, 0.5)
	  bodies[1].params['vz'] = random(-0.5, 0.5)
	  /* third body settings */
	  bodies[2].params['m'] = random(0.5, 1)
	  bodies[2].params['x'] = random(-2, 2)
	  bodies[2].params['y'] = random(-1, 1)
	  bodies[2].params['z'] = random(-0.5, 0.5)
	  bodies[2].params['vx'] = random(-0.5, 0.5)
	  bodies[2].params['vy'] = random(-0.5, 0.5)
	  bodies[2].params['vz'] = random(-0.5, 0.5)
	  this.setState({ g : random(0.5, 1.5)})
	  this.setState({ speed : 25})
	  this.setState({ bodies })
  }
  
  setSolution6 = () => {
	  const bodies = this.state.bodies
	  /* first body settings */
	  bodies[0].params['m'] = 1
	  bodies[0].params['x'] = -2
	  bodies[0].params['y'] = -0.5
	  bodies[0].params['z'] = 0
	  bodies[0].params['vx'] = 0
	  bodies[0].params['vy'] = 10
	  bodies[0].params['vz'] = 0
	  /* second body settings */
	  bodies[1].params['m'] = 1000
	  bodies[1].params['x'] = 0
	  bodies[1].params['y'] = -0.5
	  bodies[1].params['z'] = 0
	  bodies[1].params['vx'] = 0
	  bodies[1].params['vy'] = 0
	  bodies[1].params['vz'] = 0
	  /* third body settings */
	  bodies[2].params['m'] = 0.001
	  bodies[2].params['x'] = -1
	  bodies[2].params['y'] = 1.232
	  bodies[2].params['z'] = 0
	  bodies[2].params['vx'] = 8.66
	  bodies[2].params['vy'] = 5
	  bodies[2].params['vz'] = 0
	  this.setState({ speed : 10})
	  this.setState({ g : 0.2})
	  this.setState({ bodies })
  }
  
  setSolution7 = () => {
	  const bodies = this.state.bodies
	  /* first body settings */
	  bodies[0].params['m'] = 10
	  bodies[0].params['x'] = -1
	  bodies[0].params['y'] = 0
	  bodies[0].params['z'] = 0
	  bodies[0].params['vx'] = 1
	  bodies[0].params['vy'] = -Math.sqrt(3)
	  bodies[0].params['vz'] = 0
	  /* second body settings */
	  bodies[1].params['m'] = 10
	  bodies[1].params['x'] = 0
	  bodies[1].params['y'] = Math.sqrt(3)
	  bodies[1].params['z'] = 0
	  bodies[1].params['vx'] = -2
	  bodies[1].params['vy'] = 0
	  bodies[1].params['vz'] = 0
	  /* third body settings */
	  bodies[2].params['m'] = 10
	  bodies[2].params['x'] = 1
	  bodies[2].params['y'] = 0
	  bodies[2].params['z'] = 0
	  bodies[2].params['vx'] = 1
	  bodies[2].params['vy'] = Math.sqrt(3)
	  bodies[2].params['vz'] = 0
	  this.setState({ speed : 20})
	  this.setState({ g : 0.8})
	  this.setState({ bodies })
  }

  copyShareLink = () => {
    const { bodies, speed, g, zoom, showTrail1, showTrail2, showTrail3, years} = this.state
    const params = bodies.map(body => Object.values(body.params))
	const display_path = '/Daily_Web_Tasks/threebody'
    const paramString =
      `/${speed}/${g}/${zoom}/${+showTrail1}/${+showTrail2}/${+showTrail3}/${years}` +
      params.reduce((paramString, params) => {
        params.forEach(param => (paramString += `/${param}`))
        return paramString
      }, '')
    copy(`${window.location.origin}${display_path}${paramString}`)
	 var obj=document.getElementById('msg-show');
	 var str = "Cosmo #";
	 str = str + parseInt((bodies[0].params['m'] + bodies[1].params['m'] + bodies[2].params['m']) * 100, 10) + " <a class='lost'>copied</a> and exploded";
     obj.innerHTML = str;
	 setTimeout(() => (obj.innerHTML = "GLOBAL SETTINGS"), 2000);
  }

  render() {
    return (
      <div className="App">
	    <Loader />
        <div className="controls-container">
          <MainControls
            {...this.state}
            share={this.copyShareLink}
			setsolution1={this.setSolution1}
			setsolution2={this.setSolution2}
			setsolution3={this.setSolution3}
			setsolution4={this.setSolution4}
			setsolution5={this.setSolution5}
			setsolution6={this.setSolution6}
			setsolution7={this.setSolution7}
            onChange={this.handleParamChange}
          />
          {this.state.showControls &&
            this.state.bodies.map(body => (
              <BodyControls
                key={`body${body.number}`}
                {...body}
                onChange={this.handleBodyChange}
              />
            ))}
        </div>
        <Scene {...this.state} />
		
      </div>
    )
  }
}

export default App
