import React from 'react';
import perspective from '../perspective';
import Anchor from '../3d/Anchor';
import Coordinate from '../3d/Coordinate';
import Space from '../3d/Space';
const BORDER_WIDTH = 1;

export default function MonochromeTile ({ width = 10, height = 100, stroke = 'black', strokeWidth = BORDER_WIDTH, onClick }) {
	const coords = [];

	for (let i = 0; i < width * height; i++) {
		const x = i % width;
		const y = Math.floor(i / width);
		coords.push(new Coordinate(x * 4, y * 4, Math.random() * 3));
	}


	return coords.map(coord => {
		const f = perspective.toPixels(0, 0, coord.z);
		return <Anchor x={coord.x} y={coord.y} key={coord.toString()}>
			<circle cy={f[1]} r={2} fill={'rgba(0,0,0,0.5)'} />
			<line x1={0} y1={0} x2={0} y2={f[1]} stroke={'rgba(0,0,0,0.5)'} strokeWidth={0.5}/>
		</Anchor>
	});

	const z = [];
	for (let i = 0; i < width; i++) {
		z.push()
	}
}
