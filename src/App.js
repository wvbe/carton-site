import React, { Fragment, useState, useCallback } from 'react';
import Markdown from './Markdown';
import resumeMd from './blog/resume.md';
import projectsMd from './blog/projects.md';

const states = {
	IDLE: 0,
	LOADING: 1,
	DONE: 2,
	ERROR: 3
};

const markdownFiles = [ resumeMd, projectsMd ];
function App() {
	const [ activeContent, setActiveContent ] = useState(null);

	const activateMd = useCallback(async (md) => {
		const content = await fetch(md).then((r) => r.text());
		setActiveContent(content);
	});
	return (
		<div style={{ maxWidth: '800px', margin: '0 auto' }}>
			<ol>
				{markdownFiles.map((f) => (
					<li key={f}>
						<a href="#" onClick={() => activateMd(f)}>
							{f}
						</a>
					</li>
				))}
			</ol>
			{activeContent && <hr />}
			{activeContent && <Markdown markdownString={activeContent} />}
		</div>
	);
}

export default App;
