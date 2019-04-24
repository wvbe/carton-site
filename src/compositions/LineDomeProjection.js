import React from 'react';

import { Geometry, Vector3 } from 'three';

export default function LineDomeProjection ({
	vertices = 10,
	start = new Vector3(0, 0, 0),
	stepSize = 3
}) {
	const geometry = new Geometry();
	geometry.vertices.push(start);
	[start].concat(Array.from(new Array(vertices))).reduce((previous, x, i) => {
		const nextVertex = previous.clone().add(new Vector3(
			Math.random() * 2 - 1,
			Math.random() * 2 - 1,
			Math.random() * 2 - 1
		).normalize().multiplyScalar(stepSize));
		geometry.vertices.push(nextVertex);

		return nextVertex;
	}, start);
	return <group>
		{/* <mesh>
			<sphereBufferGeometry args={[70, 90, 90]} attach='geometry' />
			<meshBasicMaterial wireframe color={0xeeeeee} attach='material' />
		</mesh> */}
		<line geometry={geometry}>
			{/* <lineDashedMaterial color={0x000040} gapSize={0.3} dashSize={0.3} linewidth={0.1} attach='material' /> */}
		</line>
	</group>;
}