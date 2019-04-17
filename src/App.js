import React from 'react';
import {
	MeshStandardMaterial
} from 'three';
import Scene from './three/Scene';
import DumpSceneContext from './three/DumpSceneContext';
import PerspectiveCamera from './three/PerspectiveCamera';
import AmbientLight from './three/AmbientLight';
import Voxel from './three/Voxel';
import SpotLight from './three/SpotLight';
import Renderer from './three/Renderer';
import Plane from './three/Plane';
import GridHelper from './three/GridHelper';

const demoMaterial = new MeshStandardMaterial( { color: 0xA00000 });
export default function App ({ }) {
	return <Scene>
		<AmbientLight intensity={2} />
		<SpotLight />
		{/* <Plane /> */}
		<GridHelper />
		{/* <Voxel /> */}
		{ Array.from(new Array(200)).map((x, i) => <Voxel
			key={ i }
			x={-25 + Math.floor(50*Math.random())}
			y={-5 + Math.floor(10*Math.random())}
			z={-25 + Math.floor(50*Math.random())}
			material={ demoMaterial }
		/>) }
		<Renderer
			// width={ document.body.clientWidth }
			// height={ window.innerHeight / 2 }
		/>
	</Scene>;
}