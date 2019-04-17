import React from 'react';
import {
	MeshStandardMaterial,
	MeshBasicMaterial,
	Shape,
	ShapeGeometry
} from 'three';
import Scene from './three/Scene';
import DumpSceneContext from './three/DumpSceneContext';
import PerspectiveCamera from './three/PerspectiveCamera';
import AmbientLight from './three/AmbientLight';
import Voxel from './three/Voxel';
import SpotLight from './three/SpotLight';
import Renderer from './three/Renderer';
import Mesh from './three/Mesh';
import Plane from './three/Plane';
import FontoLogo from './shapes/FontoLogo';
import GridHelper from './three/GridHelper';

var heartShape = new Shape();
var x = 0, y = 0;
heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

var heartGeometry = new ShapeGeometry( heartShape );

const demoMaterial = new MeshStandardMaterial( { color: 0xA00000, roughness: 0, metalness: 0.5  });
export default function App ({ }) {
	return <Scene>
		<AmbientLight intensity={2} />

		<SpotLight />

		{/* <Plane material={demoMaterial} width={100} height={100}/> */}

		<GridHelper />
		<FontoLogo />
		{/* <Mesh
			geometry={ heartGeometry }
		/>
		<Voxel /> */}

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