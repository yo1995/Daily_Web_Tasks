import React, { Component } from 'react'
import './Loader.css';


class Loader extends Component {
	render() {
    return (
		<div id="loader-wrapper">
			<div id="loader-symbol">✡</div>
			<div id="loader">✡</div>
			<div className="loader-section section-left"></div>
			<div className="loader-section section-right"></div>
			<div className="load_title">
				<a href="https://github.com/yo1995/Daily_Web_Tasks/ThreeBody">消灭人类暴政<br/>世界属于三体</a><br/>
				<small>*请驾驶高速飞船以逃离二向箔</small><br/>
				<span id="busuanzi_container_site_pv">PV: <span id="busuanzi_value_site_pv"></span></span>
				<span id="busuanzi_container_site_uv">UV: <span id="busuanzi_value_site_uv"></span></span>
			</div>
		</div>
    )
  }
}

export default Loader