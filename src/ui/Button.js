import React, {Component} from 'react';
import * as css from '../style';
export default class Button extends Component {
	state = {
		clicked: false
	};
	render () {
		const {
			color = 'black',
			url,
			children,
			title = null
		} = this.props;
		const {
			clicked
		} = this.state;
		const style = css.merge(css.steno.header, {
			border: '1px solid ' + color,
			borderRadius: '2px',
			textAlign: 'center',
			textDecoration: 'none',
			textTransform: 'uppercase',
			cursor: 'pointer',
			color: color,
			display: 'block',
			margin: '5px 0 0 0',
			backgroundColor: clicked ? 'rgba(0,0,0,0.1)' : 'transparent',
			':hover': {
				backgroundColor: 'rgba(0,0,0,0.75)',
				border: '1px solid rgba(0,0,0,0.5)',
				color: 'white'
			}
		});
		return <a href={url} target={'_blank'} {...style} onClick={() => this.setState({clicked: true})} title={title}>
			{children}
		</a>;
	}
}
