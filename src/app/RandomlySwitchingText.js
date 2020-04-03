import { useState, useEffect } from 'react';

export const JOB_FIELD = [
	'web', 'responsive', 'interaction', 'tech', 'schema', 'nodejs', 'full-stack', 'intergalactic',
	'usability', 'experience', 'multi-disciplinary', 'open-source', 'frontend', 'art', 'devops', 'graphic',
	'software', 'creative', 'javascript', 'pixel', 'internet', 'communications', 'app', 'React', 'NodeJS', 'XML',
	'XQuery'
].map(x => x.toLowerCase());

export const JOB_ROLE = [
	'developer', 'designer', 'enthousiast', 'guru', 'ninja', 'wizard', 'harry', 'programmer', 'engineer',
	'professional', 'architect', 'evangelist', 'strategist', 'consultant', 'technician', 'master', 'hacker',
	'guy', 'person', 'buddy', 'pusher', 'product owner'
];

export const TIMEOUT_RANDOM = Symbol();

export default function RandomlySwitchingText ({
	between = [],
	enabled = true,
	milliseconds = TIMEOUT_RANDOM,
}) {
	const [ index, setIndex ] = useState(Math.floor(Math.random() * between.length));

	useEffect(() => {
		if (!enabled) {
			return;
		}
		let timeout = null;
		const tick = () => {
			setIndex(Math.floor(Math.random() * between.length));
			timeout = setTimeout(tick, milliseconds === TIMEOUT_RANDOM ? Math.floor(25 + Math.random() * 400) : milliseconds || 25);
			return () => clearTimeout(timeout);
		}

		return tick ();
	}, [
		between.length,
		enabled,
		milliseconds,
	]);

	return between[index] || null;
}