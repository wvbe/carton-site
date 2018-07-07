import React from 'react';
import * as css from './style';
import {
	Anchor,
	Container as SvgContainer,
	WebSurface
} from './lib/3d';

import FillerSurface from './ui/FillerSurface';
import ForgetFeed from './ui/ForgetFeed';
import Button from './ui/Button';

import startFakeNews from './animations/startFakeNews';
import HomepageAsciiArt from './world/HomepageAsciiArt';

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

const initialFakeNews = [
	['init', 'Connected to http://wyb.be, welcome ANON'],
	['ws', '0x://websocket'],
	['http', '101 Switching Protocols'],
	['ws', 'Upgrade (websocket)'],
	['', 'permessage-deflate; client_max_window_bits'],
	['', 'MeIy8A1qAhcqufFKmIr/qw=='],
	['', 'aLE6oM0LDpu0+YGAiEbKf4Qnx98='],
	['usr', 'ANON user (wyb.be v1000)'],
	['usr', 'Loading profile'],
	// ['usr', navigator.userAgent]
];
setTimeout(() => {
	startFakeNews('fake-news')
}, 2000);

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
export default function World () {
    return <div {...appStyle}>
		{/*<Container>*/}
			{/*<Anchor x={-30} y={-30}>*/}
				{/*<WireframeSea width={31} height={31} resolution={2}/>*/}
			{/*</Anchor>*/}
		{/*</Container>*/}
		<HtmlContainer>
			<WebSurface x={0} y={-11} z={0} width={10} axis={'y'}>
				<Button url={'resume-of-wybe-minnebo--wyb.be--2018.pdf'} small={true}>curriculum vitae</Button>
				<Button url={'picture-of-my-cat.jpg'} small={true}>picture of my cat</Button>
			</WebSurface>
			<WebSurface x={-13} y={-4} z={2} width={10} axis={'y'}>
				<div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', textAlign: 'right' }}>
					<FillerSurface width={'50px'} height={'50px'} />
				</div>
			</WebSurface>
			<WebSurface x={-12} y={1} z={2} width={10} axis={'x'}>
				<div style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'right' }}>
					<p>wybe minnebo<br />application developer<br />and shenanigans</p>
					<p>★★★★★</p>
					<Button url={'https://github.com/wvbe'}>GitHub</Button>
					<Button url={'https://www.linkedin.com/in/wybeminnebo/'}>LinkedIn</Button>
				</div>
			</WebSurface>
			<WebSurface x={0} y={1} z={2} width={25}>
				<div style={{position: 'absolute', bottom: 0, width: '100%' }}>
					<ForgetFeed initial={initialFakeNews} eventName={'fake-news'} />
				</div>
			</WebSurface>
		</HtmlContainer>
        <SvgContainer>
			<HomepageAsciiArt />
        </SvgContainer>
    </div>
}
