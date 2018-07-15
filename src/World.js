import React from 'react';
import * as css from './style';
import {
	Container as SvgContainer,
	WebSurface,
	WireframeSea
} from './lib/3d';

import HomepageAsciiArt from './world/HomepageAsciiArt';
import HomepageAchievements from "./world/HomepageAchievements";

// Colors: https://color.adobe.com/nl/Copy-of-Flat-Design-color-theme-10773248/edit/?copy=true&base=1&rule=Custom&selected=1&name=Kopie%20van%20Copy%20of%20Flat%20Design&mode=hsv&rgbvalues=0.89,0.4841600000000777,0.24920000000000003,0.3432,0.88,0.7726400000000976,0.87,0.35510499999980555,0.28709999999999997,0.198,0.3005999999999803,0.36,0.94,0.7908533333331782,0.30079999999999996&swatchOrder=0,1,2,3,4
const appStyle = css.merge(
    css.steno.base,
	{
	    backgroundColor: '#F0CA4D',
        backgroundImage: 'linear-gradient(90deg, #f0ca4d 25%, #ebc641 25%, #ebc641 50%, #f0ca4d 50%, #f0ca4d 75%, #ebc641 75%, #ebc641 100%)',
        backgroundSize: '20px 20px',
        width: '100%',
        height: '100%',
		display: 'flex'
	});


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
    return <div {...appStyle}>
		<HtmlContainer>
			<WebSurface x={0} y={-11} z={0} width={10} axis={'y'}>
				{ renderSecondaryButtons() }
			</WebSurface>

			<WebSurface x={-13} y={0} z={2} axis={'y'}>
				{ renderAchievementsSection() }
			</WebSurface>

			<WebSurface x={-12} y={1} z={2} width={10} axis={'x'}>
				<div style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'right' }}>
					{ renderHeaderSection() }
				</div>
			</WebSurface>

			<WebSurface x={0} y={1} z={2} width={25}>
				<div style={{position: 'absolute', bottom: 0, width: '100%' }}>
					{ renderLogSection() }
				</div>
			</WebSurface>
		</HtmlContainer>
        <SvgContainer>
			{/*<Anchor x={10} y={-50*2/2}>*/}

				{/*<WireframeSea width={10} />*/}
			{/*</Anchor>*/}
			<HomepageAsciiArt />
        </SvgContainer>
    </div>
}
