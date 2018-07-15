import React from 'react';
import * as css from '../style';
import {
	WebSurface
} from '../lib/3d';
import FillerSurface from '../ui/FillerSurface';
import LogFeed from "../ui/LogFeed";
import HomepageAchievementColumn from "./HomepageAchievementColumn";
import timeOnlineAchievements from "../animations/timeOnlineAchievements";


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

export default function HomepageAchievements ({ x, y, z, axis, boxSize = '32px', initialTicker = []}) {
	return <WebSurface x={x} y={y} z={z} width={20} axis={axis}>
		<div {...style}>
			<div {...subStyle}>
				<div style={{ width:'10px' }} />
				<HomepageAchievementColumn register={(update) => {
					update(update.DISCOVERED);
					return () => { console.log('Destroyer callback for achievement tracker'); }
				}} boxSize={boxSize} />
				<div style={{ width:'10px' }} />
				<HomepageAchievementColumn label={'kick the baby'} register={(update) => {
					update(update.DISCOVERED);
					return () => { console.log('Destroyer callback for achievement tracker'); }
				}} boxSize={boxSize} />
				<div style={{ width:'10px' }} />
				<HomepageAchievementColumn register={timeOnlineAchievements} boxSize={boxSize} />
			</div>
			<div style={{ height:'10px' }} />
			<div {...subStyle}>
				<LogFeed eventName={'ticker'} initial={initialTicker} maxHistory={1} />
			</div>
		</div>
	</WebSurface>
};
