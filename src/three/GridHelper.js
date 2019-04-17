import {
	useContext
} from 'react';
import {
	GridHelper
} from 'three';

import SceneContext from './SceneContext';

export default function Scene ({
	size = 100,
	divisions = 100,
	opacity = 0.25,
	transparent = true
}) {
	const scene = useContext(SceneContext);

	var helper = new GridHelper(size, divisions);
	// helper.position.y = - 199;
	// helper.position.z = - 699;
	helper.material.opacity = opacity;
	helper.material.transparent = transparent;

	scene.add(helper);
	return null;
}