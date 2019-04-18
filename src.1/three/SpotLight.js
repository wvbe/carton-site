import {
	useContext
} from 'react';
import {
	SpotLight,
	LightShadow,
	PerspectiveCamera
} from 'three';

import SceneContext from './SceneContext';

export default function Scene ({
	color = 0xf0f0f0,
	intensity = 1.5
}) {
	const scene = useContext(SceneContext);

	const light = new SpotLight(color, intensity);

	light.position.set( 0, 1500, 200 );
	light.castShadow = true;
	light.shadow = new LightShadow( new PerspectiveCamera( 70, 1, 200, 2000 ) );
	light.shadow.bias = - 0.000222;
	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;

	scene.add(light);
	return null;
}