/* obsolete piece: défait in precision */
const threeBodyCalc = ({ speed, g, years, bodies, trails }) => {
  const interval = 0.005;
  for (let j = 0; j < speed; j++) {
    const vectors = [
      bodies[1].position.clone().sub(bodies[0].position),
      bodies[2].position.clone().sub(bodies[0].position),
      bodies[2].position.clone().sub(bodies[1].position),
    ]

    const forces = [
      vectors[0].clone().normalize().multiplyScalar(-g * bodies[0].mass * bodies[1].mass).divideScalar(vectors[0].lengthSq()),
      vectors[1].clone().normalize().multiplyScalar(-g * bodies[0].mass * bodies[2].mass).divideScalar(vectors[1].lengthSq()),
      vectors[2].clone().normalize().multiplyScalar(-g * bodies[1].mass * bodies[2].mass).divideScalar(vectors[2].lengthSq())
    ]

    const momentums = [
      bodies[0].momentum.clone().sub(forces[0].add(forces[1]).multiplyScalar(interval)),
      bodies[1].momentum.clone().add(forces[0].sub(forces[2]).multiplyScalar(interval)),
      bodies[2].momentum.clone().add(forces[1].add(forces[2]).multiplyScalar(interval))
    ]

    const positions = [
      bodies[0].position.clone().add(momentums[0].clone().multiplyScalar(interval).divideScalar(bodies[0].mass)),
      bodies[1].position.clone().add(momentums[1].clone().multiplyScalar(interval).divideScalar(bodies[1].mass)),
      bodies[2].position.clone().add(momentums[2].clone().multiplyScalar(interval).divideScalar(bodies[2].mass))
    ]

    bodies.forEach((body, i) => {
      bodies[i].position = positions[i];
      bodies[i].momentum = momentums[i];
    })

    trails.forEach(function (trail, i) {
		if (trails[i].length > 50 * years) {
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
