import React from 'react';


const cvProperties = {
	'Name': 'Wybe Minnebo',
	'Gender': 'Male (M)',
	'Nat.': 'Dutch (NL)',
	'Birth': '10-JUL-1988'
};

const cvContent = <iframe style={{display:'flex', flex: '1 1 auto', width: '100%' }} src={ '/resume-of-wybe-minnebo--wyb.be--2017.pdf' } />;

export default function (app) {
	app.console
		.addCommand('cv')
		.addAlias('resume')
		.setDescription('my online curriculum vitae, resume, work experience et. al.')
		.setController((req, res) => {
			res.log('Opening curriculum vitae window');
			res.log('-------------------------------');
			res.log('A PDF copy of my resume is opening in a window. Use your browser\'s native PDF viewer to zoom');
			res.log(<p>or save. If your browser does not have this capability, <a href="https://www.google.com/chrome" target="_blank">download a decent browser</a></p>);

			app.emit('window:new', 'curriculum vitae', cvContent, { size: 0.6, ratio: 16/9 });
		});
}
