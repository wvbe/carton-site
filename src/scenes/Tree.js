import React, { useEffect, useMemo, useState } from 'react';
import {
	PerspectiveCamera,
	Vector3,
	Color,
	SphereBufferGeometry,
	PlaneGeometry,
	MeshPhongMaterial,
	TextGeometry,
	FontLoader
} from 'three';
import {
	Canvas,
	useRender,
	useThree
} from 'react-three-fiber';

import * as materials from '../materials';

import OrbitControls from '../compositions/OrbitControls';
import TrackballControls from '../compositions/TrackballControls';

function Text({
	position,
	rotation,
	onClick,
	material = materials.wireframe,
	font = '/fonts/helvetiker_regular.typeface.json',
	text,
	size = 3,
	height = 0.2,
	curveSegments = 6,
	...textGeometryProps
}) {
	const [textGeometry, setTextGeometry] = useState(null);

	useEffect(() => new FontLoader().load(font, (fontInstance) => {
		setTextGeometry(new TextGeometry( text, {
			font: fontInstance,
			size,
			height,
			curveSegments,
			...textGeometryProps
		}));
	}), [font]);

	return textGeometry ?
		<mesh position={position} rotation={rotation} material={ material } geometry={textGeometry} onClick={onClick} /> :
		null;
}


function HelperMeshes () {
	return (<React.Fragment>
		<axisHelper args={[10]}/>

		{/* <gridHelper args={[100, 100, 0xcccccc]} /> */}

		<mesh>
			<sphereBufferGeometry args={[70, 90, 90]} attach='geometry' />
			<meshBasicMaterial wireframe color={0xeeeeee} attach='material' />
		</mesh>
	</React.Fragment>);
}

function HelperLights () {
	return (<React.Fragment>
		<directionalLight color={ 0xffffff } />
	</React.Fragment>);
}

export default function Tree ({ hasGrid, hasTrackballCamera }) {
	const camera = new PerspectiveCamera(
		70,
		window.innerWidth / window.innerHeight,
		1,
		1000);
	camera.position.set(16, -16, 60);
	camera.lookAt(new Vector3(0, 0, 0));

	return <Canvas camera={ camera }>
		<OrbitControls
			enablePan={false}
			enableRotate={false}
			enableZoom={false}
			autoRotateSpeed={ 0.5 }
		/>
		<TrackballControls
		/>
		{ hasGrid &&  <HelperMeshes />}


		<Text text='wybe minnebo' material={ materials.basicBlack } position={[-14, 0, 0]} onClick={(e) => console.log('On click', e)} />
		<Text text='javascript, interaction design' material={ materials.basicBlack } size='1' position={[-14, -3, 0]} />
	</Canvas>;
}
