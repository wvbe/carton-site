import React from 'react';
import OrbitControls from 'three-orbitcontrols';
import { PerspectiveCamera, Vector3, Color, SphereBufferGeometry } from 'three';
import { Canvas, useRender, useThree } from 'react-three-fiber';
import * as materials from './materials';
import Spotlights from './compositions/Spotlights';
function Orbs () {
	const {
		canvas,
		camera,
		scene
	} = useThree();

	scene.background = new Color(0xf0f0f0);
	var controls = new OrbitControls(camera, canvas);
	controls.damping = 0.2;

	return null;
}

export default function App ({ }) {
	const camera = new PerspectiveCamera(
		70,
		window.innerWidth / window.innerHeight,
		1,
		1000);
	camera.position.set(0, 150, 100);
	camera.lookAt(new Vector3(0, 0, 0));


	return <Canvas camera={ camera }>
		<Orbs />
		{/* <axesHelper args={[50]} /> */}
		<gridHelper args={[100, 100, 0x999999, 0xcccccc]} />
		<ambientLight color={ 0xffffff } intensity={ 1 } />
		<Spotlights lights={12} />

		<mesh material={ materials.whiteMaterial }>
			<dodecahedronGeometry attach="geometry" args={[10]} />
		</mesh>

		<mesh material={ materials.demoMaterial } position={[20, 0, 20]}>
			<sphereBufferGeometry attach="geometry" args={[10, 32, 32]} />
		</mesh>

		<group position={[-20, 0, 20]} rotation={[Math.PI/9, Math.PI/7, Math.PI/3]}>
			<mesh material={ materials.redMaterial } position={[0, 0, 0]}>
				<boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
			</mesh>
			<mesh material={ materials.redMaterial } position={[0, 0, -20]}>
				<boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
			</mesh>
			<mesh material={ materials.redMaterial } position={[0, 0, -40]}>
				<boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
			</mesh>
			<mesh material={ materials.redMaterial } position={[0, 0, -60]}>
				<boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
			</mesh>
			<mesh material={ materials.redMaterial } position={[0, 0, -80]}>
				<boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
			</mesh>

		</group>
	</Canvas>;
}
