import React, { Component } from 'react';
import {
	WebGLRenderer,
	PerspectiveCamera,
	Vector3
} from 'three';
import OrbitControls from 'three-orbitcontrols';
import SceneContext from './SceneContext';

export default class Renderer extends Component {
	static contextType = SceneContext;
	static defaultProps = {
		width: window.innerWidth,
		height: window.innerHeight
	}

	webglRendererElement = React.createRef();

	startThree = () => {
		const scene = this.context;
		const renderer = new WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(this.props.width, this.props.height);
		renderer.shadowMap.enabled = true;

		// @TODO
		const {
			fieldOfView = 70,
			aspectRatio = window.innerWidth / window.innerHeight,
			nearPlane = 1,
			farPlane  = 10000,
			position = { x: 0, y: 50, z: 100 }
		} = {};
		const camera = new PerspectiveCamera( fieldOfView, aspectRatio, nearPlane, farPlane);
		camera.position.set(position.x, position.y, position.z);
		camera.lookAt(scene.position)

		const render = () => renderer.render( scene, camera );

		var controls = new OrbitControls( camera, renderer.domElement );
		controls.damping = 0.2;

		render();

		controls.addEventListener( 'change', render );

		this.webglRendererElement.current.appendChild(renderer.domElement);
	}

	componentDidMount () {
		this.startThree();
	}

	render() {
		return <div
			ref={this.webglRendererElement}
			style={{
				// position: 'static',
				// top: 0,
				// left: 0,
				// right: 0,
				// bottom: 0
			}}
		/>;
	}
}