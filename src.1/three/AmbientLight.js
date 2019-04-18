import {
	useContext
} from 'react';
import {
	AmbientLight
} from 'three';

import SceneContext from './SceneContext';

export default function Scene ({
	color = 0xf0f0f0,
	intensity = 1
}) {
	const scene = useContext(SceneContext);

	const light = new AmbientLight(color, intensity);

	scene.add(light);
	return null;
}