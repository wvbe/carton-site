import React from 'react';
import IconMilkCarton from './IconMilkCarton.js';
import { css } from 'emotion';

export default function Banner({
	caption = 'Wybe Minnebo',
	subtitle = 'Internet code guy',
	primaryButtons, secondaryButtons
}) {
	console.log('Render banner');
	return (
		<div className={css`
			flex: 1 1 auto;
			max-width: 24em;
			margin: 0 auto;
			font-size: calc(1em/0.7);
		`}>
			<div className={css`
				border: 1px solid rgba(30, 30, 30, 1);
				border-radius: 3px;
				overflow: hidden;
				display: flex;
				flex-direction: row;
				align-items: center;
				background-color: #0c0c0c;
			`}>
				<div className={css`
					display: flex;
					flex-direction: column;
					flex: 0 0 auto;
					width: 4em;
					height: 4em;
					align-items: center;
					justify-content: center;
				`}>
					<IconMilkCarton />
				</div>
				<div className={css`
					flex: 1 1 auto;
					padding: 0.5em 1em;
				`}>
					<div className={css`
						font-weight: normal;
						user-select: text;
					`}>{caption}</div>
					<div className={css`
						font-size: 0.8em;
					`}>{subtitle}</div>
				</div>
			</div>
			<div className={css`
				margin-top: 1em;
				font-size: 0.6em;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			`}>
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
