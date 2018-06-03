import React, { Component } from 'react';
import ForgetFeed from './ForgetFeed'
import EventEmitter from "../lib/classes/EventEmitter";
const initial = [
	['init', 'Connected to http://wyb.be, welcome ANON'],
	['ws', '0x://websocket'],
	['http', '101 Switching Protocols'],
	['ws', 'Upgrade (websocket)'],
	['', 'permessage-deflate; client_max_window_bits'],
	['', 'MeIy8A1qAhcqufFKmIr/qw=='],
	['', 'aLE6oM0LDpu0+YGAiEbKf4Qnx98='],
	['usr', 'ANON user (wyb.be v1000)'],
	['usr', 'Loading profile'],
	['usr', navigator.userAgent]
];

function generateRandomString (length) {
	const alphabet = '0123456789abcdef';
	let str = '';
	for (let i = 0; i < length; i++) {
		if (i && !(i % 2)) {
			str += ' ';
		}
		str += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}

	return str;
}

const continuous = [
	['', 'sudo rm -rf /'],
	['', 'tracert']
];
// Populate the continuous array with bollocks
// @TODO: Do better, mix together some git output, fstat stuff, top, pm2, docker, anything
for (let i = 0; i < 200; i++) {
	continuous.push(['0x', generateRandomString(8 + Math.floor(Math.random()*2) * 2)]);
}

export default class FakeNewsFeed extends Component {
	timeOut = null;
	continuousLogger = new EventEmitter();

	componentWillMount () {
		const derp = () => {
			const takeABreak = Math.random() < 0.3;

			this.timeOut = setTimeout(() => {
				let roll = Math.ceil(1 + Math.random() * 7);
				roll = roll < 3 ? 1 : roll - 3;

				for (let i = 0; i < roll; i++) {
					this.continuousLogger.emit('data', continuous[Math.floor(Math.random() * continuous.length)]);
				}

				derp();
			}, takeABreak ? 2000 + Math.random() * 10000 : 200 + Math.random() * 1000);
		};

		setTimeout(derp, 2000);
	}

	componentWillUnmount () {
		clearTimeout(this.timeOut);
	}
	shouldComponentUpdate () {
			return false;
	}
	render () {
		return <ForgetFeed initial={initial} eventEmitter={this.continuousLogger} />
	}
}
