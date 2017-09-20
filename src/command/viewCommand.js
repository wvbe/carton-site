export default (app) => {
	app.console
		.addCommand('view')
		.setDescription('[placeholder] View portfolio items and code that I write')
		.setController((req, res) => {
			res.log(`-----------------------------------------------------------------------------`);
			res.log(`PLACEHOLDER FOR ${req.command.name} COMMAND`);
			res.log(`-----------------------------------------------------------------------------`);
		});
}
