import * as THREE from 'three';

const MATERIAL_WIREFRAME = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x333333 });
const MATERIAL_DERP = new THREE.MeshBasicMaterial({ wireframe: true, color: 'red' });
const MATERIAL_LINE = new THREE.LineBasicMaterial({ color: 0x999999 });

let SAFETY_VERTEX_MAX_COUNT = 1;
export default class BranchGrowth {
	FERTILITY = 0.5;
	VOLATILITY = 0.3;
	NOTCH_VOLATILITY = 0.3;
	MAX_AGE = 20;
	parent = null;
	position = null;
	age = -1;
	isDead = false;
	nodes = [];
	children = [];

	direction = new THREE.Vector3(
		-1 + Math.random() * 2,
		-1 + Math.random() * 2,
		-1 + Math.random() * 2
	).normalize()

	push (node) {
		this.nodes.push(node);
	}
	iterateChildren () {
		this.children.forEach(child => child.iterate());
	}
	iterateDirection (volatility = this.VOLATILITY) {
		this.direction = this.direction
			.clone()
			.multiplyScalar(1 - volatility)
			.addScaledVector(
				new THREE.Vector3(
					-1 + Math.random() * 2,
					-1 + Math.random() * 2,
					-1 + Math.random() * 2)
					.normalize(),
				volatility)
			.normalize();
	}
	getPositionForNextChild () {
		// Branch off entirely randomly
		// return this.nodes[Math.floor(Math.random() * this.nodes.length)];

		// Branch off somewhere near the (current iteration) tip
		// return this.nodes.slice(-3)[Math.floor(Math.random() * 3)];

		// Branch off somewhere near the stem
		return this.nodes.slice(0, 3)[Math.floor(Math.random() * 3)];
	}
	iterate () {
		// console.log('ITER', !!this.parent, this.age);
		this.age++;

		if (!this.nodes.length) {
			this.push(new THREE.Vector3(0, 0, 0));
			return;
		}

		if (this.age >= this.MAX_AGE || (this.nodes.length > 10 && this.children.every(child => child.isDead))) {
			!this.isDead && console.log('Declaring branch as dead');
			this.isDead = true;
			// throw new Error('Old age got you');
			return;
		}


		this.iterateDirection();

		const lastNode = this.nodes[this.nodes.length - 1];
		this.push(lastNode.clone().addScaledVector(this.direction, 50));

		if (this.age > 3 && Math.random() < this.FERTILITY) {
			const newBranch = new BranchGrowth();
			newBranch.parent = this;
			newBranch.position = this.getPositionForNextChild();
			newBranch.direction = this.direction.clone();
			newBranch.FERTILITY = this.FERTILITY * 0;
			this.NOTCH_VOLATILITY && newBranch.iterateDirection(this.NOTCH_VOLATILITY);
			this.children.push(newBranch);
		}

		this.iterateChildren();
	}

	ancestry () {
		const ancestry = [];

		for (let node = this.parent; !!node; node = node.parent) {
			ancestry.push(node);
		}
		return ancestry.reverse();
	}
	addSelf (group = new THREE.Group(), variables) {
		if (!SAFETY_VERTEX_MAX_COUNT--) {
			return;
		}

		const minimumTetSize = 3;
		const maximumTetSize = 20;
		const inheritedDepth = this.ancestry().reduce((last, parent, i, ancestry) => {
			return last + parent.nodes.indexOf((ancestry[i + 1] || this).position);
		}, 0);
		this.nodes.slice(1).forEach((node, ownDepth) => {
			const depthRatio = (inheritedDepth + ownDepth + 1) / variables.deepestChild;
			const tetSize = minimumTetSize + (1-depthRatio) * (maximumTetSize - minimumTetSize);
			const tet = new THREE.Mesh(
				new THREE.TetrahedronBufferGeometry(tetSize),
				MATERIAL_WIREFRAME);
				tet.position.set(node.x, node.y, node.z);
			group.add(tet);
		});

		const geometry = new THREE.Geometry();
		geometry.vertices = this.nodes;
		const line = new THREE.Line(geometry, MATERIAL_LINE);
		group.add(line);

		this.children.forEach(child => {
			const childGroup = new THREE.Group();
			childGroup.position.set(child.position.x, child.position.y, child.position.z);
			child.addSelf(childGroup, variables);
			group.add(childGroup);
		});

		// console.log('ADD', !!this.parent, this.nodes.length, this.children.length);
	}

	finalize (scene) {
		const getDepthChildren = (maxDepth, child) => {
			const childStartDepth = child.parent.nodes.indexOf(child.position) + child.children.reduce(getDepthChildren, child.nodes.length);
			return Math.max(maxDepth, childStartDepth)
		}
		const variables = {
			deepestChild: this.children.reduce(getDepthChildren, this.nodes.length)
		};

		this.addSelf(scene, variables);
	}

	static init (scene, asRoot) {
		const tree = new BranchGrowth();

		if (asRoot) {
			tree.direction = new THREE.Vector3(0, 1, 0);
		}
		let safety = 1000;
		while (--safety) {
			try {
				tree.iterate();
			} catch (e) {
				const groupName = 'Tree died: ' + e.message;
				console.group(groupName);
				console.log(e.stack);
				console.groupEnd(groupName);
				break;
			}
		}
		if (safety === 0) {
			console.log('Out of safety bounds');
		}

		tree.finalize(scene);

		window.tree = tree;
	}
}