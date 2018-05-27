import React, {Component} from 'react';
import Anchor from "../lib/3d/Anchor";
import MonochromeBox from "../lib/objects/MonochromeBox";

export default class BoxProgressBar extends Component {
	lights = [];
	state = {
		progress: 0
	};

	_progress = () => {
		if (this.state.progress >= 1) {
			return;
		}
		this.timeOut = setTimeout(() => {
			const mRandom = Math.random();
			this.setState({
				progress: this.state.progress + 1/this.props.length
			});

			this._progress();
		}, 200);
	};

	componentDidMount () {
		for (let i = 0; i < this.props.length; i++) {
			this.lights.push({
				key: i,
				threshold: (i + 1) / this.props.length
			});
		}

		this._progress();
		// When the entry is logged, scroll the containing ConsoleOutputComponent to its bottom.
		// This is a dirty hack, and it assumes the container is el.parentNode.parentNode
		// But it works, for now
		if (!this.element) {
			return;
		}

		this.element.parentNode.scrollTop = this.element.parentNode.scrollHeight;
	}

	componentWillUnmount () {
		if (this.timeOut) {
			clearTimeout(this.timeOut);
		}
	}


	render() {
		const { progress } = this.state;
		return this.lights.map((light,i) => <Anchor key={light.key} y={ i % (this.props.layers || Infinity)} z={-Math.floor(i / (this.props.layers || Infinity))}>{
			 progress < light.threshold ?
				 null :
				 <MonochromeBox/>
		}</Anchor>).reverse();
	}
}
