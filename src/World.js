import React from 'react';
import * as css from './style';
import {
	Container as SvgContainer,
	WebSurface
} from './lib/3d';

import HomepageAsciiArt from './world/HomepageAsciiArt';
import Anchor from "./lib/3d/Anchor";



function HtmlContainer ({ children }) {
	return <div {...css.merge({
		// svg and viewbox
		width: '1px',
		height: '1px',
		overflow: 'visible',
		position: 'absolute',
		left: '50%',
		top: '50%'
	})}>
		{ children }
	</div>;
}

export default function World ({
   renderSecondaryButtons,
   renderHeaderSection,
   renderLogSection,
   renderAchievementsSection
}) {
    return [
		<HtmlContainer key={'most-of-the-ui'}>
			<WebSurface x={0} y={-11} z={-1} width={10} axis={'y'}>
				{ renderSecondaryButtons() }
			</WebSurface>

			<WebSurface x={-12} y={-1} z={1} axis={'y'}>
				{ renderAchievementsSection() }
			</WebSurface>

			<WebSurface x={-11} y={0} z={2} width={10} axis={'x'}>
				<div style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'right' }}>
					{ renderHeaderSection() }
				</div>
			</WebSurface>

			<WebSurface x={0} y={1} z={1} width={25}>
				<div style={{position: 'absolute', bottom: 0, width: '100%' }}>
					{ renderLogSection() }
				</div>
			</WebSurface>
		</HtmlContainer>,

        <SvgContainer key={'3d-text'}>
			<HomepageAsciiArt />
        </SvgContainer>,

		<SvgContainer key={'crosshairs'}>
			<Anchor
				// in the top right of secondary buttons
				x={1} y={0} z={-7}
				crosshairSize={2}
			/>
			<Anchor
				// Between main menu and achievements
				x={-12} y={0} z={0}
				crosshairSize={2}
			/>
			<Anchor
				// In the bottom right of the fake news log
				x={0} y={1} z={1}
				crosshairSize={2}
			/>
			<Anchor
				// Bottom left (front) of "ux+js"
				x={1} y={-38} z={-7}
				crosshairSize={2}
			/>

		</SvgContainer>
	];
}
