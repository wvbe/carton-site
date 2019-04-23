import React, { useState } from 'react';
import Tree from './scenes/Tree';
function UiOverlay ({ children }) {
	return <div style={{ position: 'absolute', top: '20px', left: '20px'}}>
		{ children }
	</div>;
}

export default function App () {
	const [hasGrid, setHasGrid] = useState(false);
	const [hasTrackballCamera, setTrackballCamera] = useState(false);

	return [
		<Tree
			key='react-three-fiber'
			hasGrid={ hasGrid }
			hasTrackballCamera={ hasTrackballCamera }
		/>,
		<UiOverlay key='ui'>
			<p><input type='checkbox' checked={ hasGrid } onChange={() => setHasGrid(!hasGrid)} /> Grid</p>
		</UiOverlay>
	];
}
