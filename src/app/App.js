import React, { useState } from 'react';
import { css } from 'emotion';

import Banner from './Banner';
import BannerButton from './BannerButton';
import Routes from './Routes';
import { useLocation } from 'react-router-dom';
import RandomlySwitchingText, { JOB_FIELD, JOB_ROLE } from './RandomlySwitchingText';

const bannerPrimaryButtons = <>
	<BannerButton href="https://www.linkedin.com/in/wybeminnebo">LinkedIn</BannerButton>
	<BannerButton href="https://github.com/wvbe">Github</BannerButton>
</>;
const bannerSecondaryButtons = <>
	<BannerButton href="mailto:wybe@x-54.com">mailto</BannerButton>
	{/* <BannerButton route="/journal">Journal</BannerButton> */}
</>;

function PausableSwitchingText () {
	const [isPaused, setPaused] = useState(false);
	return <span onClick={() => setPaused(!isPaused)} title='Click to pause'>
		<RandomlySwitchingText between={JOB_FIELD} enabled={!isPaused} />
		{' '}
		<RandomlySwitchingText between={JOB_ROLE} enabled={!isPaused} />
	</span>
}
export default function App () {
	const { pathname } = useLocation();
	const isHomePage = !pathname || pathname === '/';

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
				<Banner primaryButtons={bannerPrimaryButtons} secondaryButtons={bannerSecondaryButtons} subtitle={<PausableSwitchingText />} />
			</div>

			<div className={css`

			`}>
				<Routes />
			</div>

		</>
	);
}