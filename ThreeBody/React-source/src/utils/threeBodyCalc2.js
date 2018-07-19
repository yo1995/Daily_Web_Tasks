import { Vector3 } from 'three'

const threeBodyCalc = ({ speed, g, years, bodies, trails }) => {
  const interval = 0.001;
  for (let j = 0; j < speed; j++) {
	  
	  var x0 = bodies[0].position.x
	  var y0 = bodies[0].position.y
	  var z0 = bodies[0].position.z
	  var vx0 = bodies[0].velocity.x
	  var vy0 = bodies[0].velocity.y
	  var vz0 = bodies[0].velocity.z
	  
	  var x1 = bodies[1].position.x
	  var y1 = bodies[1].position.y
	  var z1 = bodies[1].position.z
	  var vx1 = bodies[1].velocity.x
	  var vy1 = bodies[1].velocity.y
	  var vz1 = bodies[1].velocity.z
	  
	  var x2 = bodies[2].position.x
	  var y2 = bodies[2].position.y
	  var z2 = bodies[2].position.z
	  var vx2 = bodies[2].velocity.x
	  var vy2 = bodies[2].velocity.y
	  var vz2 = bodies[2].velocity.z
	
	// euc len between stars
	var r01 = Math.sqrt(Math.pow((x1-x0), 2) + Math.pow((y1-y0), 2) + Math.pow((z1-z0), 2))
	var r02 = Math.sqrt(Math.pow((x2-x0), 2) + Math.pow((y2-y0), 2) + Math.pow((z2-z0), 2))
	var r12 = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2) + Math.pow((z2-z1), 2))
	
	// 0
	var dv01 = g * bodies[1].mass * interval / Math.pow(r01, 2) 
	var dv02 = g * bodies[2].mass * interval / Math.pow(r02, 2) 
	var dv10 = g * bodies[0].mass * interval / Math.pow(r01, 2) 
	var dv12 = g * bodies[2].mass * interval / Math.pow(r12, 2) 
	var dv20 = g * bodies[0].mass * interval / Math.pow(r02, 2) 
	var dv21 = g * bodies[1].mass * interval / Math.pow(r12, 2) 
	
	vx0 = vx0 + dv01 * (x1 - x0) / r01 + dv02 * (x2 - x0) / r02
	vy0 = vy0 + dv01 * (y1 - y0) / r01 + dv02 * (y2 - y0) / r02
	vz0 = vz0 + dv01 * (z1 - z0) / r01 + dv02 * (z2 - z0) / r02
	
	vx1 = vx1 + dv10 * (x0 - x1) / r01 + dv12 * (x2 - x1) / r12
	vy1 = vy1 + dv10 * (y0 - y1) / r01 + dv12 * (y2 - y1) / r12
	vz1 = vz1 + dv10 * (z0 - z1) / r01 + dv12 * (z2 - z1) / r12
	
	vx2 = vx2 + dv20 * (x0 - x2) / r02 + dv21 * (x1 - x2) / r12
	vy2 = vy2 + dv20 * (y0 - y2) / r02 + dv21 * (y1 - y2) / r12
	vz2 = vz2 + dv20 * (z0 - z2) / r02 + dv21 * (z1 - z2) / r12
	
	x0 = x0 + vx0 * interval
	y0 = y0 + vy0 * interval
	z0 = z0 + vz0 * interval
	
	x1 = x1 + vx1 * interval
	y1 = y1 + vy1 * interval
	z1 = z1 + vz1 * interval
	
	x2 = x2 + vx2 * interval
	y2 = y2 + vy2 * interval
	z2 = z2 + vz2 * interval

	const positions = [new Vector3( x0, y0, z0 ), new Vector3( x1, y1, z1 ), new Vector3( x2, y2, z2 )]
	const velocitys = [new Vector3( vx0, vy0, vz0 ), new Vector3( vx1, vy1, vz1 ), new Vector3( vx2, vy2, vz2 )]
	
	bodies.forEach((body, i) => {
      bodies[i].position = positions[i];
      bodies[i].velocity = velocitys[i];
    })
	
    trails.forEach(function (trail, i) {
		if (trails[i].length > 100 * years) {
			trails[i].shift();
			return(trails[i].push(positions[i]));
		}
		else {
			return(trails[i].push(positions[i]));
		}
    })
  }

  return { bodies, trails }
}

export default threeBodyCalc;
