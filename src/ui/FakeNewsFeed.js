import React, { Component } from 'react';
import LogFeed from './LogFeed'
const initial = [
	['init', 'Connected to http://wyb.be, welcome ANON'],
	['ws', '0x://websocket'],
	['http', '101 Switching Protocols'],
	['ws', 'Upgrade (websocket)'],
	['', 'permessage-deflate; client_max_window_bits'],
	['', 'MeIy8A1qAhcqufFKmIr/qw=='],
	['', 'aLE6oM0LDpu0+YGAiEbKf4Qnx98='],
	['usr', 'ANON user (wyb.be v1000)'],
	['usr', 'Loading profile']
];

export default class FakeNewsFeed extends Component {

	componentWillMount () {
	}

	render () {
		return <LogFeed initial={initial} />
	}
}
