import React from 'react';
import * as css from '../style';
import {
	WebSurface
} from '../lib/3d';
import FillerSurface from '../ui/FillerSurface';
import LogFeed from "../ui/LogFeed";


const style = css.merge(
	css.flex.vertical,
	css.flex.justifyEnd,
	{
		position: 'absolute',
		bottom: 0,
		right: 0,
		textAlign: 'right'
	});
const subStyle = css.merge(
	css.flex.horizontal,
	css.flex.justifyEnd
);
function Circle () {
	return <div {...css.merge(
		css.display.block,
		css.border.harsh,
		css.position.absoluteCenter,
		{
			borderRadius: '50%',
			width: '66%',
			height: '66%',
		}
	)} />
}
export default function HomepageAchievements ({ x, y, z, axis, boxSize = '32px'}) {
	return <WebSurface x={x} y={y} z={z} width={20} axis={axis}>
		<div {...style}>
			<div {...subStyle}>
				<FillerSurface width={boxSize} height={boxSize} />
				<div style={{ width:'10px' }} />
				<FillerSurface width={boxSize} height={boxSize} />
				<div style={{ width:'10px' }} />
				<FillerSurface width={boxSize} height={boxSize}><Circle/></FillerSurface>
			</div>
			<div style={{ height:'10px' }} />
			<div {...subStyle}>
				<LogFeed eventName={'ticker'} initial={['(connecting)']} maxHistory={1} />
			</div>
		</div>
	</WebSurface>
}

const derp = <div>



</div>;
