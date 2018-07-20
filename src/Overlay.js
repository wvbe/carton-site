import React from 'react';
import * as css from './style';

const outlineStyle = css.merge(
	css.position.fixed,
	{
		top: '10vh',
		left: '10vh',
		width: '80vw',
		height: '80vh',
		border: '3px solid red'
});
export default function Overlay () {
    return <div {...outlineStyle}>

	</div>;
}
