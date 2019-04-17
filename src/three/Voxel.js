import {
	useContext
} from 'react';
import {
	Mesh,
	MeshNormalMaterial,
	MeshBasicMaterial,
	CubeGeometry,
	ShadowMaterial,
	MeshStandardMaterial
} from 'three';

import SceneContext from './SceneContext';

export default function Scene ({
	x = 0,
	y = 0,
	z = 0,
	material = new MeshBasicMaterial({
		wireframe: true,
		color: 0x666666
	})
}) {
	const scene = useContext(SceneContext);

	const cube = new Mesh(new CubeGeometry(1,1,1), material);
	cube.position.x = x + 0.5;
	cube.position.y = y + 0.5;
	cube.position.z = z + 0.5;

	scene.add(cube);
	return null;
}