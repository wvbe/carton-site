import React from 'react';

import perspective from '../perspective';
const scaleX = 0.8;//Math.sqrt(2);
const webSurfaceStyle = {
	position: 'absolute',
	transform: 'skewY(-30deg) scaleX(' + scaleX + ')',
	transformOrigin: 'top left'
};

export default function WebSurface ({ x = 0, y = 0, z = 0, axis, width, height, children }) {
	const [left, top] = perspective.toPixels(...[x, y, z]);
	const [w, h] = perspective.toPixels(0, width, height);
	const style = Object.assign({}, webSurfaceStyle, {
		left,
		top,
		width: w / scaleX + 'px'
	});
	return <foreignObject>
		<div style={style}>
			{ children }
		</div>
	</foreignObject>
}
