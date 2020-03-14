import React, { Fragment, useState, useCallback, useEffect } from 'react';
import {
	Switch,
	Route,
	Link,
	useLocation
} from "react-router-dom";
import Banner from './Banner';
import JournalRoute from './JournalRoute';
import JOURNAL_ENTRIES from './JOURNAL_ENTRIES';
import './App.css';


const projectsMd = JOURNAL_ENTRIES.find(entry => entry.baseName.split('.')[0] === 'projects');

function App() {
	const location = useLocation();
	const isHomePage = !location.pathname || location.pathname === '/';
	return (
		<>
			<div className='app-banner' style={{ height: isHomePage ? '100vh' : '16em' }}>
				<Banner>
					{!isHomePage && <Link to='/'>&lt;</Link>}
					<Link to={`/journal`}>Journal</Link>
					<Link to={`/journal/${projectsMd.baseName}`}>Projects</Link>
				</Banner>
			</div>
			<Switch>
				<Route path="/journal/:journalName">
					<JournalRoute />
				</Route>
				<Route path="/journal">
					<ol>
						{JOURNAL_ENTRIES.map((f) => (
							<li key={f.fileName}>
								<Link to={`/journal/${f.baseName}`}>{f.fileName}</Link>
							</li>
						))}
					</ol>
				</Route>
			</Switch>
		</>
	);
}

export default App;
