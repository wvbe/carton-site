import React from 'react';
import {
	PlaneBufferGeometry
} from 'three';

import Mesh from './Mesh';

export default function Scene ({
	width = 10,
	height = 10,
	widthSegments,
	heightSegments,
	...meshProps
}) {
	const geometry = new PlaneBufferGeometry(width, height, widthSegments, heightSegments);
	geometry.rotateX(-Math.PI / 2);

	return <Mesh
		geometry={ geometry }
		{ ...meshProps }
	/>;
}