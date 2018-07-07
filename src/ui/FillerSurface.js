import React, {Component} from 'react';
import * as css from '../style';
export default class Button extends Component {
	state = {
		clicked: false
	};
	render () {
		const {
			width = '100%',
			height = '100%',
			children
		} = this.props;

		const lineWidth = 1;

		const style = css.merge(
			css.border.harsh,
			{
				width,
				height,
				background: '' +
					'       linear-gradient(to top left,\n' +
					'           rgba(0,0,0,0) 0%,\n' +
					'           rgba(0,0,0,0) calc(50% - ' + lineWidth + 'px),\n' +
					'           rgba(0,0,0,1) 50%,\n' +
					'           rgba(0,0,0,0) calc(50% + ' + lineWidth + 'px),\n' +
					'           rgba(0,0,0,0) 100%),\n' +
					'       linear-gradient(to top right,\n' +
					'           rgba(0,0,0,0) 0%,\n' +
					'           rgba(0,0,0,0) calc(50% - ' + lineWidth + 'px),\n' +
					'           rgba(0,0,0,1) 50%,\n' +
					'           rgba(0,0,0,0) calc(50% + ' + lineWidth + 'px),\n' +
					'           rgba(0,0,0,0) 100%)'
			});
		return <div {...style}>
			{children}
		</div>;
	}
}
