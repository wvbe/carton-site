import React from 'react';

const props = {
	// svg
	width: '1px',
	height: '1px',
	overflow: 'visible',

	// css
	style: {
		position: 'absolute',
		left: '50%',
		top: '50%'
	}
};

export default function Container ({ children }) {
	return (
		<svg { ...props } shapeRendering={'geometricPrecision '}>
			{ children }
		</svg>
	);
}
