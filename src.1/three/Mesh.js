import {
	useContext
} from 'react';
import {
	Mesh,
	MeshBasicMaterial,
	CubeGeometry
} from 'three';

import SceneContext from './SceneContext';

export default function MeshComponent ({
	geometry = new CubeGeometry(1,1,1),
	material = ,
	x = 0,
	y = 0,
	z = 0
}) {
	console.log('MESH', geometry, material);
	const scene = useContext(SceneContext);
	const mesh = new Mesh(geometry, material);

	mesh.position.x = x + 0.5;
	mesh.position.y = y + 0.5;
	mesh.position.z = z + 0.5;
	// plane.receiveShadow = true;

	scene.add(mesh);
	return null;
}