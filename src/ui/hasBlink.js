import React, { Component } from 'react';

export default function hasBlink (Comp, {
	interval = 500, // blink every x milliseconds
	delay = null // wait ms before starting the interval (phase)
} = {}) {
	return class BlinkHoc extends Component {
		state = {
			visible: false
		};

		interval = null;
		timeout = null;

		componentDidMount () {
			const switcheroo = () => {
				this.setState({
					visible: !this.state.visible
				});
			};


			if (delay === null) {
				switcheroo();
				this.interval = setInterval(switcheroo, interval);
				return;
			}
			setTimeout(() => {
				switcheroo();
				this.timeout = null;
				this.interval = setInterval(switcheroo, interval);
			}, delay);
		}

		componentWillUnmount () {
			clearInterval(this.interval);
			clearTimeout(this.timeout);

			this.interval = null;
			this.timeout = null;
		}

		render () {
			if (!this.state.visible) {
				return null;
			}

			return <Comp {...this.props} />;
		}
	}
}
