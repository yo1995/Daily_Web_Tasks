import React, { Component } from 'react'
import React3 from 'react-three-renderer'
import { Vector3 } from 'three'
import colors from '../utils/colors'
import TrackballControls from '../utils/trackball'
//import threeBodyCalc from '../utils/threeBodyCalc'
//import threeBodyCalc from '../utils/threeBodyCalc3RK45'
import threeBodyCalc from '../utils/threeBodyCalc2'
import './Scene.css'


class Scene extends Component {
  constructor(props) {
    super(props)
    this.state = this._initState(props)
  }
 
  componentDidMount() {
    const controls = new TrackballControls(this.mainCamera, this.react3)
    controls.rotateSpeed = 1.5
    controls.zoomSpeed = 1.2
    controls.panSpeed = 0.8
    controls.staticMoving = true

    controls.addEventListener('change', () => {
      this.setState({
        cameraposition: this.mainCamera.position
      })
    })

    this.controls = controls
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this._initState(nextProps))
  }

  componentWillUnmount() {
    this.controls.dispose()
    delete this.controls
  }

  _initState = ({ bodies, speed, g, zoom, showTrail1, showTrail2, showTrail3, years }) => {
	 return {
	  cameraposition: new Vector3(0, 0, zoom),
	  bodies: bodies.map(({ params }) => ({
		mass: params.m,
		position: new Vector3(params.x, params.y, params.z),
		velocity: new Vector3(params.vx, params.vy, params.vz),
		// momentum: new Vector3(params.vx, params.vy, params.vz).multiplyScalar(params.m)
	  })),
	  trails: [[], [], []],
	  zoom,
	  speed,
	  g,
	  showTrail1, 
	  showTrail2, 
	  showTrail3,
	  years
	}
  }

  _mainCameraRef = mainCamera => {
    this.mainCamera = mainCamera
  }

  _react3Ref = react3 => {
    this.react3 = react3
  }

  _onAnimate = () => {
    this.controls.update()
    this.setState(threeBodyCalc(this.state))
  }

  render() {
    const width = window.innerWidth
    const height = window.innerHeight
	var showTrails= [this.state.showTrail1,this.state.showTrail2,this.state.showTrail3]
    return (
      <div className="scene">
        <React3
          mainCamera="mainCamera"
          width={width}
          height={height}
          antialias={true}
          onAnimate={this._onAnimate}
          canvasRef={this._react3Ref}
		  clearColor={0x000000}
		  alpha={true}
		  clearAlpha={0.1}
        >
          <scene>
            <perspectiveCamera
              name="mainCamera"
              fov={75}
              aspect={width / height}
              near={0.1}
              far={1000}
              ref={this._mainCameraRef}
              position={this.state.cameraposition}
            />
            {this.state.bodies.map((body, i) => (
              <mesh key={`body${i}`} position={body.position}>
                <sphereGeometry radius={body.mass > 2 ? 0.2 : 0.02 + body.mass * 0.09} widthSegments={10} heightSegments={10} />
                <meshBasicMaterial color={parseInt(`0x${colors[i]}`, 16)} />
              </mesh>
            ))}
            {this.state.trails.map(function(trail, i) {
				  if(showTrails[i]) {
					  return(
						<line key={`trail${Math.random()}`}>
						  <geometry vertices={trail} />
						  <lineBasicMaterial color={parseInt(`0x${colors[i]}`, 16)} linewidth={2} />
						</line>
					  )
				  }
				  else {
					  return [];
				  }
              })}
          </scene>
        </React3>
      </div>
    )
  }
}

export default Scene
