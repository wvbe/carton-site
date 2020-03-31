import React from 'react';
import { css } from 'emotion';

import IconExternalLink from './IconExternalLink';

const className = css`
	font-weight: bold;
	border-radius: 3px;
	text-transform: uppercase;
	padding: 0.5em;

	margin-left: 1em;
	&:first-child {
		margin-left: 0;
	}

	&:hover {
		background: repeating-linear-gradient(
			45deg,
			transparent,
			transparent 3px,
			hsl(40, 94%, 20%) 3px,
			hsl(40, 94%, 20%) 6px
		);
	}
`;

export default function BannerButton({
	isExternalLink,
	children,
	...props
}) {
	const additionalProps = isExternalLink ? {
		target: '_blank',
		rel: 'noopener noreferrer'
	} : {};
	return <a className={className} {...additionalProps} {...props}>
		{children}
		{isExternalLink ? <>{' '}<IconExternalLink /></> : null}
	</a>;
};