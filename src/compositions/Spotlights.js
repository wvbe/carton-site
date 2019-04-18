import React from 'react';
import { PerspectiveCamera, Vector3 } from 'three';

export default function App ({ radius = 100, lights = 12 }) {
	return Array.from(new Array(lights))
		.map((_, i) => i/lights * 2 * Math.PI)
		.map((rad, i) => {
			const {r, g, b} = {
				r: Math.abs(Math.floor(150 * Math.sin(rad * (i/lights) * 2 * Math.PI + 1/3 * Math.PI))),
				g: Math.abs(Math.floor(150 * Math.sin(rad * (i/lights) * 2 * Math.PI + 2/3 * Math.PI))),
				b: Math.abs(Math.floor(150 * Math.sin(rad * (i/lights) * 2 * Math.PI + 3/3 * Math.PI)))
			}

			console.log('COLOR', rad, r,g,b, [
				300 * Math.sin(rad),
				30,
				300 * Math.cos(rad)
			]);
			return <spotLight
				key={ i }
				color={`rgba(${r}, ${g}, ${b})` }
				intensity={0.5}
				position={[
					300 * Math.sin(rad),
					30,
					300 * Math.cos(rad)
				]}>
				<lightShadow
					attach="shadow"
					args={[new PerspectiveCamera( 70, 1, 200, 2000 )]}
					bias={ -0.000222 }
					mapSize={{ width: 1024, height: 1024 }}
				/>

			</spotLight>;
		});
}
