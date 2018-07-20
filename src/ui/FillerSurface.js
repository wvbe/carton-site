import React from 'react';
import * as css from '../style';
export default function FillerSurface ({
   width = '100%',
   height = '100%',
	hasBackground = true,
   children
}) {
		const lineWidth = 1;

		const style = css.merge(
			css.border.harsh,
			css.position.relative,
			{
				width,
				height,
				background: hasBackground ?
					'       linear-gradient(to top left,\n' +
					'           rgba(0,0,0,0) 0%,\n' +
					'           rgba(0,0,0,0) calc(50% - ' + lineWidth + 'px),\n' +
					'           rgba(0,0,0,1) 50%,\n' +
					'           rgba(0,0,0,0) calc(50% + ' + lineWidth + 'px),\n' +
					'           rgba(0,0,0,0) 100%),\n' +
					'       linear-gradient(to top right,\n' +
					'           rgba(0,0,0,0) 0%,\n' +
					'           rgba(0,0,0,0) calc(50% - ' + lineWidth + 'px),\n' +
					'           rgba(0,0,0,1) 50%,\n' +
					'           rgba(0,0,0,0) calc(50% + ' + lineWidth + 'px),\n' +
					'           rgba(0,0,0,0) 100%)' :
					null
			});
		return <div {...style}>
			{children}
		</div>;
}
