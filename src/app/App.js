import React from 'react';
import { css } from 'emotion';

import Banner from './Banner';
import BannerButton from './BannerButton';

const bannerPrimaryButtons = <>
	<BannerButton isExternalLink href="https://www.linkedin.com/in/wybeminnebo">LinkedIn</BannerButton>
	<BannerButton isExternalLink href="https://github.com/wvbe">Github</BannerButton>
</>;

export default function App () {
	const bannerSecondaryButtons = null;
	const isHomePage = true;

	return (
		<>
			<div className={css`
				transition: height 0.25s;
				height: 100vh;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: stretch;
				height: ${isHomePage ? '100vh' : '66vh'}
			`}>
				<Banner primaryButtons={bannerPrimaryButtons} secondaryButtons={bannerSecondaryButtons} />
			</div>
			{/*
				<div>
					<Routes />
				</div>
			*/}
		</>
	);
}