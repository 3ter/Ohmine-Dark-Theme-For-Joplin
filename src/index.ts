import joplin from 'api';

joplin.plugins.register({
	onStart: async function () {
		// From https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/load_css
		const installDir = await joplin.plugins.installationDir();
		console.info('Plugin installation directory: ', installDir);
		const chromeCssFilePath = installDir + '/userchrome.css';
		const noteCssFilePath = installDir + '/userstyle.css';

		await (joplin as any).window.loadChromeCssFile(chromeCssFilePath);
		await (joplin as any).window.loadNoteCssFile(noteCssFilePath);
	},
});
