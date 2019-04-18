import React from 'react';
import OrbitControls from 'three-orbitcontrols';
import { PerspectiveCamera, Vector3, Color } from 'three';
import { Canvas, useRender, useThree } from 'react-three-fiber';
import * as materials from './materials';
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
		<ambientLight color={ 0xffffff } intensity={ 1.5 } />

		<spotLight color={ 'blue' } intensity={ 2 }
				position={[0, 200, -500]}>
			<lightShadow
				attach="shadow"
				args={[new PerspectiveCamera( 70, 1, 200, 2000 )]}
				bias={ -0.000222 }
				mapSize={{ width: 1024, height: 1024 }}
			/>
		</spotLight>
		<spotLight color={ 'red' } intensity={ 2 }
				position={[200, 500, 50]}>
			<lightShadow
				attach="shadow"
				args={[new PerspectiveCamera( 70, 1, 200, 2000 )]}
				bias={ -0.000222 }
				mapSize={{ width: 1024, height: 1024 }}
			/>
		</spotLight>
		<spotLight color={ 'red' } intensity={ 2 }
				position={[-33, -200, 100]}>
			<lightShadow
				attach="shadow"
				args={[new PerspectiveCamera( 70, 1, 200, 2000 )]}
				bias={ -0.000222 }
				mapSize={{ width: 1024, height: 1024 }}
			/>
		</spotLight>

		<mesh material={ materials.demoMaterial }>
			<dodecahedronGeometry attach="geometry" args={[10]} />
			{/* <meshStandardMaterial attach="material" color="indianred" transparent /> */}
		</mesh>
	</Canvas>;
}
