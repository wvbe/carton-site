import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import BranchGrowth from './BranchGrowth';

const MATERIAL_WIREFRAME = new THREE.MeshBasicMaterial({ wireframe: true, color: 0 });
const MATERIAL_DERP = new THREE.MeshBasicMaterial({ wireframe: true, color: 'red' });

let camera, scene, renderer;
const animationFrameCallbacks = [];


function getRandomVertices (
	length = Math.random() * 300,
	stepSize = 5 + Math.random() * 30,
	start = new THREE.Vector3(0, 0, 0)
) {
	const verts = [start];
	Array.from(new Array(Math.floor(length)))
		.reduce((previous, x, i) => {
			const nextVertex = previous.clone().add(new THREE.Vector3(
				Math.random() * 2 - 1,
				Math.random() * 2 - 1,
				Math.random() * 2 - 1
			).normalize().multiplyScalar(5 + Math.random() * 30));
			verts.push(nextVertex);
			return nextVertex;
		}, start);
	return verts;
}

function polyLine (vertices) {
	const group = new THREE.Group();

	const geometry = new THREE.Geometry();
	geometry.vertices = vertices;

	const material = new THREE.LineBasicMaterial({ color: 0x999999 });
	const mesh = new THREE.Line(geometry, material);

	group.add(mesh);

	geometry.vertices.forEach((vertex, i, all) => {
		const isStart = i === 0;
		const isEnd = i === all.length - 1;
		const tet = new THREE.Mesh(
			new THREE.TetrahedronBufferGeometry(isStart || isEnd ? 5 : 1),
			isStart || isEnd ? MATERIAL_DERP : MATERIAL_WIREFRAME);
			tet.position.set(vertex.x, vertex.y, vertex.z);
		group.add(tet);
	});

	return group;
}


function multiPolyLine () {
	const group = new THREE.Group();

	for (let i = 0; i < 1; i++) {
		if (!group.children.length) {
			group.add(polyLine(getRandomVertices()));
			continue;
		}

		const precedingLineInstance = group.children[Math.floor(group.children.length * Math.random())].children[0];

		const branchOffPointVector3 = precedingLineInstance.geometry.vertices[Math.floor(precedingLineInstance.geometry.vertices.length * Math.random())];


		group.add(polyLine(getRandomVertices(undefined, undefined, branchOffPointVector3)));
	}

	console.log(group);

	return group;
}

function init() {
	const container = document.getElementById( 'container' );

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf0f0f0 );

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set( 0, 250, 1000 );
	scene.add( camera );

	// scene.add( new THREE.AmbientLight( 0xf0f0f0 ) );

	// const light = new THREE.SpotLight( 0xffffff, 1.5 );
	// light.position.set( 0, 1500, 200 );
	// light.castShadow = true;
	// light.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 70, 1, 200, 2000 ) );
	// light.shadow.bias = - 0.000222;
	// light.shadow.mapSize.width = 1024;
	// light.shadow.mapSize.height = 1024;
	// scene.add( light );

	// const planeGeometry = new THREE.PlaneBufferGeometry( 2000, 2000 );
	// const planeMaterial = new THREE.ShadowMaterial( { opacity: 0.2 } );
	// planeGeometry.rotateX( - Math.PI / 2 );
	// const plane = new THREE.Mesh( planeGeometry, planeMaterial );
	// // plane.position.y = - 200;
	// plane.receiveShadow = true;
	// scene.add( plane );

	const helper = new THREE.GridHelper( 2000, 100 );
	// helper.position.y = - 199;
	helper.material.opacity = 0.25;
	helper.material.transparent = true;
	scene.add( helper );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.shadowMap.enabled = true;
	container.appendChild( renderer.domElement );

	const controls = new OrbitControls( camera, renderer.domElement );
	controls.damping = 0.2;
	controls.addEventListener( 'change', render );

	BranchGrowth.init(scene, true);
}

function animate() {
	requestAnimationFrame( animate );
	animationFrameCallbacks.forEach(callback => callback());
	render();
}

function render() {
	renderer.render( scene, camera );
	// console.log('RENDER');
}

init();
animate();