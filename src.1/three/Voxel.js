import React from 'react';
import {
	MeshBasicMaterial,
	CubeGeometry
} from 'three';

import Mesh from './Mesh';

export default function Scene ({
	...meshProps
}) {
	const geometry = new CubeGeometry(1,1,1);

	return <Mesh
		geometry={ geometry }
		{ ...meshProps }
	/>;
}