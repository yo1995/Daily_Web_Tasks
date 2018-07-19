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
	var k1x1_x0 = x1 - x0
	var k1y1_y0 = y1 - y0
	var k1z1_z0 = z1 - z0
	var k1x2_x0 = x2 - x0
	var k1y2_y0 = y2 - y0
	var k1z2_z0 = z2 - z0
	var k1x2_x1 = x2 - x1
	var k1y2_y1 = y2 - y1
	var k1z2_z1 = z2 - z1
	
	
	// euc len between stars
	var k1r01 = Math.sqrt(Math.pow(k1x1_x0, 2) + Math.pow(k1y1_y0, 2) + Math.pow(k1z1_z0, 2))
	var k1r02 = Math.sqrt(Math.pow(k1x2_x0, 2) + Math.pow(k1y2_y0, 2) + Math.pow(k1z2_z0, 2))
	var k1r12 = Math.sqrt(Math.pow(k1x2_x1, 2) + Math.pow(k1y2_y1, 2) + Math.pow(k1z2_z1, 2))
	
	// acceleration
	var k1dv01 = g * bodies[1].mass * interval / Math.pow(k1r01, 2) 
	var k1dv02 = g * bodies[2].mass * interval / Math.pow(k1r02, 2) 
	var k1dv10 = g * bodies[0].mass * interval / Math.pow(k1r01, 2) 
	var k1dv12 = g * bodies[2].mass * interval / Math.pow(k1r12, 2) 
	var k1dv20 = g * bodies[0].mass * interval / Math.pow(k1r02, 2) 
	var k1dv21 = g * bodies[1].mass * interval / Math.pow(k1r12, 2)
	
	var k1vx0 = vx0 + k1dv01 * k1x1_x0 / k1r01 + k1dv02 * k1x2_x0 / k1r02
	var k1vy0 = vy0 + k1dv01 * k1y1_y0 / k1r01 + k1dv02 * k1y2_y0 / k1r02
	var k1vz0 = vz0 + k1dv01 * k1z1_z0 / k1r01 + k1dv02 * k1z2_z0 / k1r02
	                                       
	var k1vx1 = vx1 + k1dv10 * -k1x1_x0 / k1r01 + k1dv12 * k1x2_x1 / k1r12
	var k1vy1 = vy1 + k1dv10 * -k1y1_y0 / k1r01 + k1dv12 * k1y2_y1 / k1r12
	var k1vz1 = vz1 + k1dv10 * -k1z1_z0 / k1r01 + k1dv12 * k1z2_z1 / k1r12
	                                       
	var k1vx2 = vx2 + k1dv20 * -k1x2_x0 / k1r02 + k1dv21 * -k1x2_x1 / k1r12
	var k1vy2 = vy2 + k1dv20 * -k1y2_y0 / k1r02 + k1dv21 * -k1y2_y1 / k1r12
	var k1vz2 = vz2 + k1dv20 * -k1z2_z0 / k1r02 + k1dv21 * -k1z2_z1 / k1r12

	
	
	
	
	//
	
	
	// second k2
	var k2x1_x0 = (x1 + 0.5 * k1vx1 - x0 + 0.5 * k1vx0)
	var k2y1_y0 = (y1 + 0.5 * k1vy1 - y0 + 0.5 * k1vy0)
	var k2z1_z0 = (z1 + 0.5 * k1vz1 - z0 + 0.5 * k1vz0)
	var k2x2_x0 = (x2 + 0.5 * k1vx2 - x0 + 0.5 * k1vx0)
	var k2y2_y0 = (y2 + 0.5 * k1vy2 - y0 + 0.5 * k1vy0)
	var k2z2_z0 = (z2 + 0.5 * k1vz2 - z0 + 0.5 * k1vz0)
	var k2x2_x1 = (x2 + 0.5 * k1vx2 - x1 + 0.5 * k1vx1)
	var k2y2_y1 = (y2 + 0.5 * k1vy2 - y1 + 0.5 * k1vy1)
	var k2z2_z1 = (z2 + 0.5 * k1vz2 - z1 + 0.5 * k1vz1)
	
	var k2r01 = Math.sqrt(Math.pow(k2x1_x0, 2) + Math.pow(k2y1_y0, 2) + Math.pow(k2z1_z0, 2))
	var k2r02 = Math.sqrt(Math.pow(k2x2_x0, 2) + Math.pow(k2y2_y0, 2) + Math.pow(k2z2_z0, 2))
	var k2r12 = Math.sqrt(Math.pow(k2x2_x1, 2) + Math.pow(k2y2_y1, 2) + Math.pow(k2z2_z1, 2))
	
	var k2dv01 = g * bodies[1].mass * interval2 / Math.pow(k2r01, 2) 
	var k2dv02 = g * bodies[2].mass * interval2 / Math.pow(k2r02, 2) 
	var k2dv10 = g * bodies[0].mass * interval2 / Math.pow(k2r01, 2) 
	var k2dv12 = g * bodies[2].mass * interval2 / Math.pow(k2r12, 2) 
	var k2dv20 = g * bodies[0].mass * interval2 / Math.pow(k2r02, 2) 
	var k2dv21 = g * bodies[1].mass * interval2 / Math.pow(k2r12, 2)
	
	var k2vx0 = vx0 + k2dv01 * k2x1_x0 / k2r01 + k2dv02 * k2x2_x0 / k2r02
	var k2vy0 = vy0 + k2dv01 * k2y1_y0 / k2r01 + k2dv02 * k2y2_y0 / k2r02
	var k2vz0 = vz0 + k2dv01 * k2z1_z0 / k2r01 + k2dv02 * k2z2_z0 / k2r02
                                           
	var k2vx1 = vx1 + k2dv10 * -k2x1_x0 /k2r01 + k2dv12 * k2x2_x1 / k2r12
	var k2vy1 = vy1 + k2dv10 * -k2y1_y0 /k2r01 + k2dv12 * k2y2_y1 / k2r12
	var k2vz1 = vz1 + k2dv10 * -k2z1_z0 /k2r01 + k2dv12 * k2z2_z1 / k2r12
                                           
	var k2vx2 = vx2 + k2dv20 * -k2x2_x0 /k2r02 + k2dv21 * -k2x2_x1 / k2r12
	var k2vy2 = vy2 + k2dv20 * -k2y2_y0 /k2r02 + k2dv21 * -k2y2_y1 / k2r12
	var k2vz2 = vz2 + k2dv20 * -k2z2_z0 /k2r02 + k2dv21 * -k2z2_z1 / k2r12
	
	//
	
	// third k3
	var k3x1_x0 = (x1 + 0.5 * k2vx1 - x0 + 0.5 * k2vx0)
	var k3y1_y0 = (y1 + 0.5 * k2vy1 - y0 + 0.5 * k2vy0)
	var k3z1_z0 = (z1 + 0.5 * k2vz1 - z0 + 0.5 * k2vz0)
	var k3x2_x0 = (x2 + 0.5 * k2vx2 - x0 + 0.5 * k2vx0)
	var k3y2_y0 = (y2 + 0.5 * k2vy2 - y0 + 0.5 * k2vy0)
	var k3z2_z0 = (z2 + 0.5 * k2vz2 - z0 + 0.5 * k2vz0)
	var k3x2_x1 = (x2 + 0.5 * k2vx2 - x1 + 0.5 * k2vx1)
	var k3y2_y1 = (y2 + 0.5 * k2vy2 - y1 + 0.5 * k2vy1)
	var k3z2_z1 = (z2 + 0.5 * k2vz2 - z1 + 0.5 * k2vz1)
	
	var k3r01 = Math.sqrt(Math.pow(k3x1_x0, 2) + Math.pow(k3y1_y0, 2) + Math.pow(k3z1_z0, 2))
	var k3r02 = Math.sqrt(Math.pow(k3x2_x0, 2) + Math.pow(k3y2_y0, 2) + Math.pow(k3z2_z0, 2))
	var k3r12 = Math.sqrt(Math.pow(k3x2_x1, 2) + Math.pow(k3y2_y1, 2) + Math.pow(k3z2_z1, 2))
	
	var k3dv01 = g * bodies[1].mass * interval2 / Math.pow(k3r01, 2) 
	var k3dv02 = g * bodies[2].mass * interval2 / Math.pow(k3r02, 2) 
	var k3dv10 = g * bodies[0].mass * interval2 / Math.pow(k3r01, 2) 
	var k3dv12 = g * bodies[2].mass * interval2 / Math.pow(k3r12, 2) 
	var k3dv20 = g * bodies[0].mass * interval2 / Math.pow(k3r02, 2) 
	var k3dv21 = g * bodies[1].mass * interval2 / Math.pow(k3r12, 2)
	
	var k3vx0 = vx0 + k3dv01 * k3x1_x0 / k3r01 + k3dv02 * k3x2_x0 / k3r02
	var k3vy0 = vy0 + k3dv01 * k3y1_y0 / k3r01 + k3dv02 * k3y2_y0 / k3r02
	var k3vz0 = vz0 + k3dv01 * k3z1_z0 / k3r01 + k3dv02 * k3z2_z0 / k3r02
                                                                        
	var k3vx1 = vx1 + k3dv10 * -k3x1_x0 / k3r01 +k3dv12 * k3x2_x1 / k3r12
	var k3vy1 = vy1 + k3dv10 * -k3y1_y0 / k3r01 +k3dv12 * k3y2_y1 / k3r12
	var k3vz1 = vz1 + k3dv10 * -k3z1_z0 / k3r01 +k3dv12 * k3z2_z1 / k3r12
                                               
	var k3vx2 = vx2 + k3dv20 * -k3x2_x0 / k3r02 +k3dv21 * -k3x2_x1 / k3r12
	var k3vy2 = vy2 + k3dv20 * -k3y2_y0 / k3r02 +k3dv21 * -k3y2_y1 / k3r12
	var k3vz2 = vz2 + k3dv20 * -k3z2_z0 / k3r02 +k3dv21 * -k3z2_z1 / k3r12
	//

	
	// fourth k4 
	var k4x1_x0 = (x1 + k3vx1 - x0 + k3vx0)
	var k4y1_y0 = (y1 + k3vy1 - y0 + k3vy0)
	var k4z1_z0 = (z1 + k3vz1 - z0 + k3vz0)
	var k4x2_x0 = (x2 + k3vx2 - x0 + k3vx0)
	var k4y2_y0 = (y2 + k3vy2 - y0 + k3vy0)
	var k4z2_z0 = (z2 + k3vz2 - z0 + k3vz0)
	var k4x2_x1 = (x2 + k3vx2 - x1 + k3vx1)
	var k4y2_y1 = (y2 + k3vy2 - y1 + k3vy1)
	var k4z2_z1 = (z2 + k3vz2 - z1 + k3vz1)
	
	var k4r01 = Math.sqrt(Math.pow(k4x1_x0, 2) + Math.pow(k4y1_y0, 2) + Math.pow(k4z1_z0, 2))
	var k4r02 = Math.sqrt(Math.pow(k4x2_x0, 2) + Math.pow(k4y2_y0, 2) + Math.pow(k4z2_z0, 2))
	var k4r12 = Math.sqrt(Math.pow(k4x2_x1, 2) + Math.pow(k4y2_y1, 2) + Math.pow(k4z2_z1, 2))
	
	var k4dv01 = g * bodies[1].mass * 2 * interval / Math.pow(k4r01, 2) 
	var k4dv02 = g * bodies[2].mass * 2 * interval / Math.pow(k4r02, 2) 
	var k4dv10 = g * bodies[0].mass * 2 * interval / Math.pow(k4r01, 2) 
	var k4dv12 = g * bodies[2].mass * 2 * interval / Math.pow(k4r12, 2) 
	var k4dv20 = g * bodies[0].mass * 2 * interval / Math.pow(k4r02, 2) 
	var k4dv21 = g * bodies[1].mass * 2 * interval / Math.pow(k4r12, 2)
	
	var k4vx0 = k4vx0 + k4dv01 * k4x1_x0 / k4r01 + k4dv02 * k4x2_x0 / k4r02
	var k4vy0 = k4vy0 + k4dv01 * k4y1_y0 / k4r01 + k4dv02 * k4y2_y0 / k4r02
	var k4vz0 = k4vz0 + k4dv01 * k4z1_z0 / k4r01 + k4dv02 * k4z2_z0 / k4r02
	                      
	var k4vx1 = k4vx1 + k4dv10 * -k4x1_x0 / k4r01 + k4dv12 * k4x2_x1 / k4r12
	var k4vy1 = k4vy1 + k4dv10 * -k4y1_y0 / k4r01 + k4dv12 * k4y2_y1 / k4r12
	var k4vz1 = k4vz1 + k4dv10 * -k4z1_z0 / k4r01 + k4dv12 * k4z2_z1 / k4r12
                          
	var k4vx2 = k4vx2 + k4dv20 * -k4x2_x0 / k4r02 + k4dv21 * -k4x2_x1 / k4r12
	var k4vy2 = k4vy2 + k4dv20 * -k4y2_y0 / k4r02 + k4dv21 * -k4y2_y1 / k4r12
	var k4vz2 = k4vz2 + k4dv20 * -k4z2_z0 / k4r02 + k4dv21 * -k4z2_z1 / k4r12
	//
	
	
	// add up
	vx0 = vx0 + 1/6* (k1vx0 + 2 * k2vx0 + 2 * k3vx0 + k4vx0)
	vy0 = vy0 + 1/6* (k1vy0 + 2 * k2vy0 + 2 * k3vx0 + k4vy0)
	vz0 = vz0 + 1/6* (k1vz0 + 2 * k2vz0 + 2 * k3vx0 + k4vz0)
	                                                                      
	vx1 = vx1 + 1/6* (k1vx1 + 2 * k2vx1 + 2 * k3vx1 + k4vx1)
	vy1 = vy1 + 1/6* (k1vy1 + 2 * k2vy1 + 2 * k3vx1 + k4vy1)
	vz1 = vz1 + 1/6* (k1vz1 + 2 * k2vz1 + 2 * k3vx1 + k4vz1)
	                                                                      
	vx2 = vx2 + 1/6* (k1vx2 + 2 * k2vx2 + 2 * k3vx2 + k4vx2)
	vy2 = vy2 + 1/6* (k1vy2 + 2 * k2vy2 + 2 * k3vx2 + k4vy2)
	vz2 = vz2 + 1/6* (k1vz2 + 2 * k2vz2 + 2 * k3vx2 + k4vz2)

	x0 = x0 + vx0 * interval 
	y0 = y0 + vy0 * interval 
	z0 = z0 + vz0 * interval 
	                                          
	x1 = x1 + vx1 * interval 
	y1 = y1 + vy1 * interval 
	z1 = z1 + vz1 * interval 
	                                            
	x2 = x2 + vx2 * interval 
	y2 = y2 + vy2 * interval 
	z2 = z2 + vz2 * interval 
	
	
	//x0 = x0 + 1/6 * (k1vx0 + 2 * k2vx0 + 2 * k3vx0 + k4vx0) * interval
	//y0 = y0 + 1/6 * (k1vy0 + 2 * k2vy0 + 2 * k3vy0 + k4vy0) * interval
	//z0 = z0 + 1/6 * (k1vz0 + 2 * k2vz0 + 2 * k3vz0 + k4vz0) * interval
                                                                                                                                
	//x1 = x1 + 1/6 * (k1vx1 + 2 * k2vx1 + 2 * k3vx1 + k4vx1) * interval
	//y1 = y1 + 1/6 * (k1vy1 + 2 * k2vy1 + 2 * k3vy1 + k4vy1) * interval
	//z1 = z1 + 1/6 * (k1vz1 + 2 * k2vz1 + 2 * k3vz1 + k4vz1) * interval
	                                                                                                                           
	//x2 = x2 + 1/6 * (k1vx2 + 2 * k2vx2 + 2 * k3vx2 + k4vx2) * interval
	//y2 = y2 + 1/6 * (k1vy2 + 2 * k2vy2 + 2 * k3vy2 + k4vy2) * interval
	//z2 = z2 + 1/6 * (k1vz2 + 2 * k2vz2 + 2 * k3vz2 + k4vz2) * interval


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
