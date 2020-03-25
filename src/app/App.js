import React, {
	// Fragment,
	// useState,
	// useCallback,
	// useEffect
} from 'react';
// import {
// 	Link,
// 	useLocation
// } from "react-router-dom";
import Banner from './Banner';
// import JOURNAL_ENTRIES from '../articles';
import './App.css';
import ExtLink from './ExtLinkToch';
// import Routes from './Routes';

// const projectsMd = JOURNAL_ENTRIES.find(entry => entry.baseName.split('.')[0] === 'projects');


const bannerPrimaryButtons = <>
	<a href="https://www.linkedin.com/in/wybeminnebo" target="_blank" rel="noopener noreferrer">LinkedIn <ExtLink /></a>
	<a href="https://github.com/wvbe" target="_blank" rel="noopener noreferrer">Github <ExtLink /></a>
</>;
export default function App () {

	// const location = useLocation();
	// const isHomePage = !location.pathname || location.pathname === '/';
	// const bannerSecondaryButtons = <>
	// 	{!isHomePage && <Link to='/' style={{ opacity: 0.3 }}>&lt;</Link>}
	// 	<Link to={`/journal`}>Journal</Link>
	// 	<Link to={`/journal/${projectsMd.baseName}`}>Projects</Link>
	// </>;

	const bannerSecondaryButtons = null;
	const isHomePage = true;

	return (
		<>
			<div className='app-banner' style={{ height: isHomePage ? '100vh' : '66vh' }}>
				<Banner primaryButtons={bannerPrimaryButtons} secondaryButtons={bannerSecondaryButtons} />
			</div>
			<div className='app-body'>
				{/* <Routes /> */}
			</div>
		</>
	);
}