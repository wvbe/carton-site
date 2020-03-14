import React from 'react';
import melkpak from './pakmelktoch.svg';
import './Banner.css';

export default function Banner({ children }) {
	return (
		<div className='banner'>
			<div className='banner-top'>
				<div className='banner__left'>
					<img src={melkpak} className='banner-logo' />
				</div>
				<div className='banner__right'>
					<div className='banner-caption'>Wybe Minnebo</div>
					<div className='banner-subtitle'>Internet code guy</div>
				</div>
			</div>
			<div className="banner-bottom">
				<div>
					<a href="https://www.linkedin.com/in/wybeminnebo" target="_blank">LinkedIn</a>
					<a href="https://github.com/wvbe" target="_blank">Github</a>
				</div>
				<div>
					{children}
				</div>
			</div>
		</div>
	);
};
