import React, { useContext } from 'react';
import SceneContext from './SceneContext';

export default function Scene () {
	const context = useContext(SceneContext);

	return <pre>{JSON.stringify(context, null, '  ') }</pre>;
}