import React from 'react';
import { Group } from 'three';

import GroupContext from './GroupContext';

export default function GroupProvider ({ children }) {
	const group = new Group();
	return <GroupContext.Provider value={ group }>
		{ children }
	</GroupContext.Provider>;
}