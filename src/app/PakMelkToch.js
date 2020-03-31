import React from 'react';

const whiteLineStyles = {
	fill: 'none',
	stroke: '#fff',
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
	strokeWidth: '12px',
};

export default () => <svg
	xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461 564.41" style={{ width: 'auto', height: '2em' }}>
	<title>pakmelktoch</title>
	<polygon style={whiteLineStyles} points="9 164.03 224 186.11 224 554.5 9 451.5 9 164.03"/>
	<polygon style={whiteLineStyles} points="452 445.96 224 555.41 224 185.96 452 162.46 452 445.96"/>
	<polyline style={whiteLineStyles} points="224.5 186.46 337.5 76.46 451.5 162.46"/>
	<path style={whiteLineStyles} d="M0,161.46" transform="translate(-16.5)"/>
	<polygon style={whiteLineStyles} points="98 25.6 337 9 337 77.96 98 79.47 98 25.6"/>
	<line style={whiteLineStyles} x1="98.5" y1="78.46" x2="9" y2="163.96"/>
</svg>