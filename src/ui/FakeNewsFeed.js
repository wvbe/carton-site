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
	const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let str = '';
	for (let i = 0; i < length; i++) {
		str += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}

	return str;
}

const continuous = [
	['', 'sudo rm -rf /'],
	['', 'tracert'],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
	['', generateRandomString(6)],
];
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

		derp();
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
