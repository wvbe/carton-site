import {
	MeshBasicMaterial,
	MeshStandardMaterial,
	MeshNormalMaterial,
	SphericalReflectionMapping,
	MeshPhongMaterial,
	MeshToonMaterial
} from 'three';

export const wireframe = new MeshBasicMaterial({
	wireframe: true,
	color: 0,
	opacity: 0.5
});

export const normal = new MeshNormalMaterial();

export const whiteMaterial = new MeshPhongMaterial({
	color: 0x666666,
	flatShading: false,
	shininess: 30
});

export const demoMaterial = new MeshPhongMaterial({
	color: 'rgb(20, 20, 80)',
	flatShading: false,
	shininess: 120,
	specular: 75
});

export const redMaterial = new MeshStandardMaterial({
	color: 0xff0000,
	roughness: 0,
	metalness: 0.5
});