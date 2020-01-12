import React, { Fragment, useState, useCallback } from 'react';
import Markdown from './Markdown';
import rm from './blog/test.md';

const states = {
	IDLE: 0,
	LOADING: 1,
	DONE: 2,
	ERROR: 3
};

const markdownFiles = [rm];
function App() {
	const [activeFile, setActiveFile] = useState(null);
	const [activeContent, setActiveContent] = useState(null);
	const [status, setStatus] = useState(states.IDLE);

	const activateMd = useCallback(async (md) => {
		setActiveFile(md);
		setStatus(states.LOADING);
		const content = await fetch(md).then(r => r.text());
		setActiveContent(content);
		setStatus(states.DONE);
	});
	return <div style={{ maxWidth: '800px', margin: '0 auto'}}>
		<ol>
			{markdownFiles.map(f => <li key={f}><a href="#" onClick={() => activateMd(f)}>{f}</a></li>)}
		</ol>
		{activeContent && <hr />}
		{activeContent && <Markdown markdownString={activeContent} />}

	</div>
}

export default App;
