import { useEffect } from 'react';
import ThreeTrackballControls from 'three-trackballcontrols';
import {
	useThree,
	useRender
} from 'react-three-fiber';


export default function OrbitControlsComponent ({
	damping = 0.2,
	minAzimuthAngle = -Infinity,
	maxAzimuthAngle = Infinity,
	autoRotateSpeed = false
}) {
	const {
		canvas,
		camera,
		render
	} = useThree();

	let controls = null;

	useEffect(() => {
		console.log('-- new ThreeTrackballControls');
		controls = new ThreeTrackballControls(camera, canvas);

		controls.rotateSpeed = 16.0;
		controls.zoomSpeed = 1.2;
		controls.panSpeed = 0.8;

		controls.noZoom = false;
		controls.noPan = false;

		controls.staticMoving = true;
		controls.dynamicDampingFactor = 0.3;

		controls.keys = [
			65, // key A
			83, // key S
			68 // key D
		];
		// controls.addEventListener( 'change', render );
		// scene.background = new Color(0x000000);

		return () => {
			console.log('-- dispose ThreeTrackballControls');
			controls.dispose();
			controls = null;
		}
	}, [camera, canvas]);

	useRender(() => {
		if (!controls) {
			return;
		}

		controls.update();
	});



	return null;
}
