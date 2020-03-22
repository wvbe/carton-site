
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './JournalRoute.css';
import JOURNAL_ENTRIES from '../blog';
import Markdown from '../app/Markdown';

export default function JournalRoute() {
	const [activeContent, setActiveContent] = useState(null);
	let { journalName } = useParams();

	useEffect(() => {
		const journalEntry = JOURNAL_ENTRIES.find(entry => entry.baseName === journalName);

		if (!journalEntry) {
			setActiveContent(new Error('Not found'));
			return;
		}

		if (journalEntry.content) {
			setActiveContent(journalEntry.content);
			return;
		}

		fetch(journalEntry.fileName)
			.then((r) => r.text())
			.then(content => {
				journalEntry.content = content;
				setActiveContent(content);
			});
	}, [journalName]);

	return <div className='journalRoute'>
		{activeContent instanceof Error ?
			<pre>{activeContent.stack}</pre> :
			<Markdown markdownString={activeContent} />
		}
	</div>;
}