import React from 'react';
import { Scene, Color, AmbientLight } from 'three';

import SceneContext from './SceneContext';

export default function SceneProvider ({
	backgroundColor = 0xf0f0f0,
	children
}) {
	const scene = new Scene();

	scene.background = new Color(backgroundColor);

	return <SceneContext.Provider value={ scene }>
		{ children }
	</SceneContext.Provider>;
}