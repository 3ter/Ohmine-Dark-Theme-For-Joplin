import joplin from 'api';
import { SettingItemType } from 'api/types';
import { generateUserCSS } from './generateUserCSS';

export type ThemeSettings = {
	isEyeProtector: boolean;
};

joplin.plugins.register({
	onStart: async function () {
		// From https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/load_css
		const installDir = await joplin.plugins.installationDir();
		console.info('Plugin installation directory: ', installDir);
		const chromeCssFilePath = installDir + '/userchrome.css';
		const noteCssFilePath = installDir + '/userstyle.css';

		prepareThemeSettings();
		writeUserCSS();

		await (joplin as any).window.loadChromeCssFile(chromeCssFilePath);
		await (joplin as any).window.loadNoteCssFile(noteCssFilePath);
	},
});

async function prepareThemeSettings(): Promise<void> {
	await joplin.settings.registerSection('OhmineThemeSection', {
		label: 'Ohmine Dark Theme',
		iconName: 'fas fa-palette',
		description: `For changes to have effect you'll need to restart Joplin.`,
	});

	await joplin.settings.registerSettings({
		'isEyeProtector': {
			label: 'Use Eye Protector',
			value: false,
			type: SettingItemType.Bool,
			section: 'OhmineThemeSection',
			public: true,
			description: 'When enabled the brightness of images is reduced until you hover over them.',
		},
	});
}

async function writeUserCSS(): Promise<void> {
	const fs = joplin.require('fs-extra');

	const isEyeProtector = await joplin.settings.value('isEyeProtector');

	const settings = {
		isEyeProtector,
	};

	await generateUserCSS(settings);
}