import {
	useContext
} from 'react';
import {
	PlaneBufferGeometry,
	MeshBasicMaterial,
	ShadowMaterial,
	Mesh
} from 'three';

import SceneContext from './SceneContext';

export default function Scene ({
	width = 10,
	height = 10,
	widthSegments,
	heightSegments,
	material
}) {
	const scene = useContext(SceneContext);

	var planeGeometry = new PlaneBufferGeometry(width, height, widthSegments, heightSegments);
	planeGeometry.rotateX( - Math.PI / 2 );

	var planeMaterial = new MeshBasicMaterial({
		wireframe: false,
		color: 0xcccccc,
		opacity: 0.6
	}) || new ShadowMaterial( { opacity: 0.5 } );
	var plane = new Mesh( planeGeometry, planeMaterial );

	// plane.position.y = 100;
	plane.receiveShadow = true;

	scene.add(plane);
	return null;
}
