import React from 'react';
import perspective from '../perspective';
import Anchor from '../3d/Anchor';
import Coordinate from '../3d/Coordinate';

function arrayOfLength (l) {
	const widthArr = [];
	for (let i = 0; i < l; i++) {
		widthArr.push(i);
	}
	return widthArr;
}

function DrawFlatGrid ({ width, height, z = 0, resolution = 4, strokeWidth, stroke }) {
	return [
		...arrayOfLength(width)
			.map(x => {
				const start = perspective.toPixels(x * resolution, 0, z);
				const end = perspective.toPixels(x * resolution, (height - 1) * resolution, z);
				return <line
					key={'x' + x}
					x1={start[0]}
					y1={start[1]}
					x2={end[0]}
					y2={end[1]}
					stroke={stroke}
					strokeWidth={strokeWidth}
				/>
			}),
		...arrayOfLength(height)
			.map(y => {
				const start = perspective.toPixels(0, y * resolution, z);
				const end = perspective.toPixels((width - 1) * resolution, y * resolution, z);
				return <line
					key={'y' + y}
					x1={start[0]}
					y1={start[1]}
					x2={end[0]}
					y2={end[1]}
					stroke={stroke}
					strokeWidth={strokeWidth}
				/>
			})
	];

}

function DrawHeightGrid ({ width, height, zValues, resolution = 4, strokeWidth, stroke }) {
	return [
		...arrayOfLength(width)
			.map(x => {
				return <polyline
					key={'x' + x}
					points={arrayOfLength(height).map(y => {
						const z = zValues[x * height + y];
						return perspective.toPixels(x * resolution, y * resolution, z).join(',');
					}).join(' ')}
					fill={'none'}
					stroke={stroke}
					strokeWidth={strokeWidth}
				/>;
			}),
		...arrayOfLength(height)
			.map(y => {
				return <polyline
					key={'y' + y}
					points={arrayOfLength(width).map(x => {
						const z = zValues[x * height + y];
						return perspective.toPixels(x * resolution, y * resolution, z).join(',');
					}).join(' ')}
					fill={'none'}
					stroke={stroke}
					strokeWidth={strokeWidth}
				/>;
			})
	];

}

function DrawPoints ({ coords, resolution = 4, strokeWidth, stroke }) {
	return coords.map(coord => {
		const start = perspective.toPixels(coord.x * resolution, coord.y * resolution, coord.z);
		const end = perspective.toPixels(coord.x * resolution, coord.y * resolution, 0);

		return <line
			key={coord.x + ',' + coord.y}
			x1={start[0]}
			y1={start[1]}
			x2={end[0]}
			y2={end[1]}
			stroke={stroke}
			strokeWidth={strokeWidth}
		/>
		// return <circle key={coord.x + ',' + coord.y} cx={coords[0]} cy={ coords[1]} r={'3'} fill={'blue'} />
	});
}

export default function MonochromeTile ({
	width = 10,
	height = 10,
	resolution = 4,
	zStroke = 'rgba(0, 0, 0, 0.5)',
	zStrokeWidth = 1,
	flatGridStroke = 'rgba(0, 0, 0, 0.1)',
	flatGridStrokeWidth = 1,
	gridStroke = 'rgba(0, 0, 0, 0.2)',
	gridStrokeWidth = 1,
	circleFill = 'rgba(0,0,0,0.5)',
	circleRadius = 2,
	maxZ = 0.25 * resolution
}) {
	const coords = arrayOfLength(width).reduce((all, x) => all.concat(arrayOfLength(height).map(y => new Coordinate(
		x,
		y,
		Math.random() * maxZ
	))), []);

	return <Anchor>
		<DrawFlatGrid
			width={width}
			height={height}
			resolution={resolution}
			stroke={flatGridStroke}
			strokeWidth={flatGridStrokeWidth}
		/>
		<DrawPoints
			width={width}
			height={height}
			resolution={resolution}
			stroke={flatGridStroke}
			strokeWidth={flatGridStrokeWidth}
			coords={coords}
		/>
		<DrawHeightGrid
			width={width}
			height={height}
			resolution={resolution}
			stroke={gridStroke}
			strokeWidth={gridStrokeWidth}
			zValues={coords.map(coord => coord.z)}
		/>
	</Anchor>;
}
