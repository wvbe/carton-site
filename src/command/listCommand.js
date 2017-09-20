export default (app) => {

	(function registerCommand (ask, config) {
		const command = ask.addCommand(config.id);

		command.setDescription(config.description);
		command.setController((req, res) => {
				res.log('# ' + (config.label || config.id));

				(config.items || []).forEach((item, i, all) => res.log(item, (i + 1) + '/' + all.length));

				if (!config.children) {
					return;
				}

				if (config.items) {
					res.log();
				}

				res.log('# sub lists');
				config.children.forEach(child => {
				})
			});

		(config.children || []).forEach(child => {
			registerCommand(command, child);
		});
	})(app.console, {
		id: 'list',
		label: 'list',
		description: 'Lists of stuff and other lists',
		children: [
			{
				id: 'things-i-like',
				description: 'things I like to varying degrees of unicorn',
				items: [
					'my cat',
					'old fashioned English',
					'clever code'
				]
			},
			{
				id: 'smart-things-i-say',
				description: 'smart things i say, wether they are true or not',
				items: [
					'programmeren is een emotionele aangelegenheid / programming is an emotional occasion',
					'een mooie vriendin is een vloek en een zegen / a beautiful girlfriend is a blessing and a curse'
				]
			}
		]
	});
}
