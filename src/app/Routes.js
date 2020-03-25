import React from 'react';
import {
	Switch,
	Route,
	Link
} from "react-router-dom";
import JournalRoute from '../routes/JournalRoute';
import JOURNAL_ENTRIES from '../articles';
import './App.css';

export default function Routes () {
	return (
				<Switch>
					<Route path="/journal/:journalName">
						<JournalRoute />
					</Route>
					<Route path="/journal">
						<p>skeet brrrptptp.</p>
						<ol>
							{JOURNAL_ENTRIES.map((f) => (
								<li key={f.fileName}>
									<Link to={`/journal/${f.baseName}`}>{f.fileName}</Link>
								</li>
							))}
						</ol>
					</Route>
				</Switch>
	);
}