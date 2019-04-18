import {
	MeshBasicMaterial,
	MeshStandardMaterial,
	MeshNormalMaterial,
	SphericalReflectionMapping,
	MeshPhongMaterial
} from 'three';

export const wireframe = new MeshBasicMaterial({
	wireframe: true,
	color: 0,
	opacity: 0.5
});

export const normal = new MeshNormalMaterial();

export const demoMaterial = new MeshPhongMaterial({
	color: 'rgb(0,0,40)',
	flatShading: false,
	shininess: 50
});

export const redMaterial = new MeshStandardMaterial({
	color: 0xff0000,
	roughness: 0,
	metalness: 0.5
});