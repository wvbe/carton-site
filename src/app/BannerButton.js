import React from 'react';
import { css } from 'emotion';
import {
	Link
} from "react-router-dom";

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
	route,
	children,
	...rest
}) {
	if (rest.href) {
		return <a target='_blank' rel='noopener noreferrer' className={className} {...rest}>
			{ children }
			{' '}
			<IconExternalLink />
		</a>
	}

	return <Link to={route} className={className} children={children} {...rest}/>
};