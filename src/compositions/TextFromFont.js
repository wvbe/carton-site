import React, { useEffect, useState } from 'react';
import {
	TextGeometry,
	FontLoader
} from 'three';

import * as materials from '../materials';

const fontRegistry = {};
export default function Text({
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

	function setText (font) {
		const fontInstance = fontRegistry[font];
		setTextGeometry(new TextGeometry(text, {
			font: fontInstance,
			size,
			height,
			curveSegments,
			...textGeometryProps
		}));
	}
	useEffect(() => fontRegistry[font] ? setText(font) : new FontLoader().load(font, (fontInstance) => {
		fontRegistry[font] = fontInstance;
		setText(font);
	}), [font, text]);

	return textGeometry ?
		<mesh position={position} rotation={rotation} material={ material } geometry={textGeometry} onClick={onClick} /> :
		null;
}
