import React from 'react';
import PakMelkToch from './PakMelkToch.js';
import './Banner.css';

export default function Banner({ caption = 'Wybe Minnebo', subtitle = 'Internet code guy', primaryButtons, secondaryButtons }) {
	return (
		<div className='banner'>
			<div className='banner-top'>
				<div className='banner__left'>
					<PakMelkToch />
				</div>
				<div className='banner__right'>
					<div className='banner-caption'>{caption}</div>
					<div className='banner-subtitle'>{subtitle}</div>
				</div>
			</div>
			<div className="banner-bottom">
				{primaryButtons ? <div>
					{primaryButtons}
				</div> : null}
				{secondaryButtons ? <div>
					{secondaryButtons}
				</div> : null}
			</div>
		</div>
	);
};
