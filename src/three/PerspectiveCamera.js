import {
	useContext
} from 'react';
import {
	PerspectiveCamera
} from 'three';

import SceneContext from './SceneContext';

export default function Scene ({
	fieldOfView = 70,
	aspectRatio = window.innerWidth / window.innerHeight,
	nearPlane = 1,
	farPlane  = 10000,
	position = { x: 0, y: 250, z: 1000 }
}) {
	const scene = useContext(SceneContext);

	const camera = new PerspectiveCamera( fieldOfView, aspectRatio, nearPlane, farPlane);
	camera.position.set(position.x, position.y, position.z);

	scene.add(camera);
	return null;
}