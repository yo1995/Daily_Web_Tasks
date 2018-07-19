import { Vector3 } from 'three'


const threeBodyCalc = ({ speed, g, years, bodies, trails }) => {
  const interval = 0.001;
  const interval2 = 0.0015;
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
	
	
	
	// first k1
	var x1_x0 = x1-x0
	var y1_y0 = y1-y0
	var z1_z0 = z1-z0
	var x2_x0 = x2-x0
	var y2_y0 = y2-y0
	var z2_z0 = z2-z0
	var x2_x1 = x2-x1
	var y2_y1 = y2-y1
	var z2_z1 = z2-z1
	// euc len between stars
	var r01 = Math.sqrt(Math.pow(x1_x0, 2) + Math.pow(y1_y0, 2) + Math.pow(z1_z0, 2))
	var r02 = Math.sqrt(Math.pow(x2_x0, 2) + Math.pow(y2_y0, 2) + Math.pow(z2_z0, 2))
	var r12 = Math.sqrt(Math.pow(x2_x1, 2) + Math.pow(y2_y1, 2) + Math.pow(z2_z1, 2))
	
	// acceleration
	var dv01 = g * bodies[1].mass * interval / Math.pow(r01, 2) 
	var dv02 = g * bodies[2].mass * interval / Math.pow(r02, 2) 
	var dv10 = g * bodies[0].mass * interval / Math.pow(r01, 2) 
	var dv12 = g * bodies[2].mass * interval / Math.pow(r12, 2) 
	var dv20 = g * bodies[0].mass * interval / Math.pow(r02, 2) 
	var dv21 = g * bodies[1].mass * interval / Math.pow(r12, 2)
	
	var k1vx0 = vx0 + dv01 * x1_x0 / r01 + dv02 * x2_x0 / r02
	var k1vy0 = vy0 + dv01 * y1_y0 / r01 + dv02 * y2_y0 / r02
	var k1vz0 = vz0 + dv01 * z1_z0 / r01 + dv02 * z2_z0 / r02
	
	var k1vx1 = vx1 + dv10 * -x1_x0 / r01 + dv12 * x2_x1 / r12
	var k1vy1 = vy1 + dv10 * -y1_y0 / r01 + dv12 * y2_y1 / r12
	var k1vz1 = vz1 + dv10 * -z1_z0 / r01 + dv12 * z2_z1 / r12
	
	var k1vx2 = vx2 + dv20 * -x2_x0 / r02 + dv21 * -x2_x1 / r12
	var k1vy2 = vy2 + dv20 * -y2_y0 / r02 + dv21 * -y2_y1 / r12
	var k1vz2 = vz2 + dv20 * -z2_z0 / r02 + dv21 * -z2_z1 / r12

	
	
	vx0 = vx0 + dv01 * (x1 - x0) / r01 + dv02 * (x2 - x0) / r02
	vy0 = vy0 + dv01 * (y1 - y0) / r01 + dv02 * (y2 - y0) / r02
	vz0 = vz0 + dv01 * (z1 - z0) / r01 + dv02 * (z2 - z0) / r02
	
	vx1 = vx1 + dv10 * (x0 - x1) / r01 + dv12 * (x2 - x1) / r12
	vy1 = vy1 + dv10 * (y0 - y1) / r01 + dv12 * (y2 - y1) / r12
	vz1 = vz1 + dv10 * (z0 - z1) / r01 + dv12 * (z2 - z1) / r12
	
	vx2 = vx2 + dv20 * (x0 - x2) / r02 + dv21 * (x1 - x2) / r12
	vy2 = vy2 + dv20 * (y0 - y2) / r02 + dv21 * (y1 - y2) / r12
	vz2 = vz2 + dv20 * (z0 - z2) / r02 + dv21 * (z1 - z2) / r12
	
	//
	
	
	// second k2
	x1_x0 = (x1 + 0.5 * k1vx1 - x0 + 0.5 * k1vx0)
	y1_y0 = (y1 + 0.5 * k1vy1 - y0 + 0.5 * k1vy0)
	z1_z0 = (z1 + 0.5 * k1vz1 - z0 + 0.5 * k1vz0)
	x2_x0 = (x2 + 0.5 * k1vx2 - x0 + 0.5 * k1vx0)
	y2_y0 = (y2 + 0.5 * k1vy2 - y0 + 0.5 * k1vy0)
	z2_z0 = (z2 + 0.5 * k1vz2 - z0 + 0.5 * k1vz0)
	x2_x1 = (x2 + 0.5 * k1vx2 - x1 + 0.5 * k1vx1)
	y2_y1 = (y2 + 0.5 * k1vy2 - y1 + 0.5 * k1vy1)
	z2_z1 = (z2 + 0.5 * k1vz2 - z1 + 0.5 * k1vz1)
	
	r01 = Math.sqrt(Math.pow(x1_x0, 2) + Math.pow(y1_y0, 2) + Math.pow(z1_z0, 2))
	r02 = Math.sqrt(Math.pow(x2_x0, 2) + Math.pow(y2_y0, 2) + Math.pow(z2_z0, 2))
	r12 = Math.sqrt(Math.pow(x2_x1, 2) + Math.pow(y2_y1, 2) + Math.pow(z2_z1, 2))
	
	dv01 = g * bodies[1].mass * interval2 / Math.pow(r01, 2) 
	dv02 = g * bodies[2].mass * interval2 / Math.pow(r02, 2) 
	dv10 = g * bodies[0].mass * interval2 / Math.pow(r01, 2) 
	dv12 = g * bodies[2].mass * interval2 / Math.pow(r12, 2) 
	dv20 = g * bodies[0].mass * interval2 / Math.pow(r02, 2) 
	dv21 = g * bodies[1].mass * interval2 / Math.pow(r12, 2)
	
	var k2vx0 = vx0 + dv01 * x1_x0 / r01 + dv02 * x2_x0 / r02
	var k2vy0 = vy0 + dv01 * y1_y0 / r01 + dv02 * y2_y0 / r02
	var k2vz0 = vz0 + dv01 * z1_z0 / r01 + dv02 * z2_z0 / r02

	var k2vx1 = vx1 + dv10 * -x1_x0 / r01 + dv12 * x2_x1 / r12
	var k2vy1 = vy1 + dv10 * -y1_y0 / r01 + dv12 * y2_y1 / r12
	var k2vz1 = vz1 + dv10 * -z1_z0 / r01 + dv12 * z2_z1 / r12

	var k2vx2 = vx2 + dv20 * -x2_x0 / r02 + dv21 * -x2_x1 / r12
	var k2vy2 = vy2 + dv20 * -y2_y0 / r02 + dv21 * -y2_y1 / r12
	var k2vz2 = vz2 + dv20 * -z2_z0 / r02 + dv21 * -z2_z1 / r12
	
	//
	
	// third k3
	x1_x0 = (x1 + 0.5 * k2vx1 - x0 + 0.5 * k2vx0)
	y1_y0 = (y1 + 0.5 * k2vy1 - y0 + 0.5 * k2vy0)
	z1_z0 = (z1 + 0.5 * k2vz1 - z0 + 0.5 * k2vz0)
	x2_x0 = (x2 + 0.5 * k2vx2 - x0 + 0.5 * k2vx0)
	y2_y0 = (y2 + 0.5 * k2vy2 - y0 + 0.5 * k2vy0)
	z2_z0 = (z2 + 0.5 * k2vz2 - z0 + 0.5 * k2vz0)
	x2_x1 = (x2 + 0.5 * k2vx2 - x1 + 0.5 * k2vx1)
	y2_y1 = (y2 + 0.5 * k2vy2 - y1 + 0.5 * k2vy1)
	z2_z1 = (z2 + 0.5 * k2vz2 - z1 + 0.5 * k2vz1)
	
	r01 = Math.sqrt(Math.pow(x1_x0, 2) + Math.pow(y1_y0, 2) + Math.pow(z1_z0, 2))
	r02 = Math.sqrt(Math.pow(x2_x0, 2) + Math.pow(y2_y0, 2) + Math.pow(z2_z0, 2))
	r12 = Math.sqrt(Math.pow(x2_x1, 2) + Math.pow(y2_y1, 2) + Math.pow(z2_z1, 2))
	
	dv01 = g * bodies[1].mass * interval2 / Math.pow(r01, 2) 
	dv02 = g * bodies[2].mass * interval2 / Math.pow(r02, 2) 
	dv10 = g * bodies[0].mass * interval2 / Math.pow(r01, 2) 
	dv12 = g * bodies[2].mass * interval2 / Math.pow(r12, 2) 
	dv20 = g * bodies[0].mass * interval2 / Math.pow(r02, 2) 
	dv21 = g * bodies[1].mass * interval2 / Math.pow(r12, 2)
	
	var k3vx0 = vx0 + dv01 * x1_x0 / r01 + dv02 * x2_x0 / r02
	var k3vy0 = vy0 + dv01 * y1_y0 / r01 + dv02 * y2_y0 / r02
	var k3vz0 = vz0 + dv01 * z1_z0 / r01 + dv02 * z2_z0 / r02

	var k3vx1 = vx1 + dv10 * -x1_x0 / r01 + dv12 * x2_x1 / r12
	var k3vy1 = vy1 + dv10 * -y1_y0 / r01 + dv12 * y2_y1 / r12
	var k3vz1 = vz1 + dv10 * -z1_z0 / r01 + dv12 * z2_z1 / r12

	var k3vx2 = vx2 + dv20 * -x2_x0 / r02 + dv21 * -x2_x1 / r12
	var k3vy2 = vy2 + dv20 * -y2_y0 / r02 + dv21 * -y2_y1 / r12
	var k3vz2 = vz2 + dv20 * -z2_z0 / r02 + dv21 * -z2_z1 / r12
	//

	
	// fourth k4 
	x1_x0 = (x1 + k3vx1 - x0 + k3vx0)
	y1_y0 = (y1 + k3vy1 - y0 + k3vy0)
	z1_z0 = (z1 + k3vz1 - z0 + k3vz0)
	x2_x0 = (x2 + k3vx2 - x0 + k3vx0)
	y2_y0 = (y2 + k3vy2 - y0 + k3vy0)
	z2_z0 = (z2 + k3vz2 - z0 + k3vz0)
	x2_x1 = (x2 + k3vx2 - x1 + k3vx1)
	y2_y1 = (y2 + k3vy2 - y1 + k3vy1)
	z2_z1 = (z2 + k3vz2 - z1 + k3vz1)
	
	r01 = Math.sqrt(Math.pow(x1_x0, 2) + Math.pow(y1_y0, 2) + Math.pow(z1_z0, 2))
	r02 = Math.sqrt(Math.pow(x2_x0, 2) + Math.pow(y2_y0, 2) + Math.pow(z2_z0, 2))
	r12 = Math.sqrt(Math.pow(x2_x1, 2) + Math.pow(y2_y1, 2) + Math.pow(z2_z1, 2))
	
	dv01 = g * bodies[1].mass * 2 * interval / Math.pow(r01, 2) 
	dv02 = g * bodies[2].mass * 2 * interval / Math.pow(r02, 2) 
	dv10 = g * bodies[0].mass * 2 * interval / Math.pow(r01, 2) 
	dv12 = g * bodies[2].mass * 2 * interval / Math.pow(r12, 2) 
	dv20 = g * bodies[0].mass * 2 * interval / Math.pow(r02, 2) 
	dv21 = g * bodies[1].mass * 2 * interval / Math.pow(r12, 2)
	
	var k4vx0 = vx0 + dv01 * x1_x0 / r01 + dv02 * x2_x0 / r02
	var k4vy0 = vy0 + dv01 * y1_y0 / r01 + dv02 * y2_y0 / r02
	var k4vz0 = vz0 + dv01 * z1_z0 / r01 + dv02 * z2_z0 / r02
	
	var k4vx1 = vx1 + dv10 * -x1_x0 / r01 + dv12 * x2_x1 / r12
	var k4vy1 = vy1 + dv10 * -y1_y0 / r01 + dv12 * y2_y1 / r12
	var k4vz1 = vz1 + dv10 * -z1_z0 / r01 + dv12 * z2_z1 / r12

	var k4vx2 = vx2 + dv20 * -x2_x0 / r02 + dv21 * -x2_x1 / r12
	var k4vy2 = vy2 + dv20 * -y2_y0 / r02 + dv21 * -y2_y1 / r12
	var k4vz2 = vz2 + dv20 * -z2_z0 / r02 + dv21 * -z2_z1 / r12
	//
	
	
	// add up
	
	
	x0 = x0 + 1/6 * (k1vx0 + 2 * k2vx0 + 2 * k3vx0 + k4vx0) * interval
	y0 = y0 + 1/6 * (k1vy0 + 2 * k2vy0 + 2 * k3vy0 + k4vy0) * interval
	z0 = z0 + 1/6 * (k1vz0 + 2 * k2vz0 + 2 * k3vz0 + k4vz0) * interval
                                                                  
	                                                              
	x1 = x1 + 1/6 * (k1vx1 + 2 * k2vx1 + 2 * k3vx1 + k4vx1) * interval
	y1 = y1 + 1/6 * (k1vy1 + 2 * k2vy1 + 2 * k3vy1 + k4vy1) * interval
	z1 = z1 + 1/6 * (k1vz1 + 2 * k2vz1 + 2 * k3vz1 + k4vz1) * interval
	                                                              
	                                                             
	x2 = x2 + 1/6 * (k1vx2 + 2 * k2vx2 + 2 * k3vx2 + k4vx2) * interval
	y2 = y2 + 1/6 * (k1vy2 + 2 * k2vy2 + 2 * k3vy2 + k4vy2) * interval
	z2 = z2 + 1/6 * (k1vz2 + 2 * k2vz2 + 2 * k3vz2 + k4vz2) * interval


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
