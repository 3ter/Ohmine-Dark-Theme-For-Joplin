import joplin from 'api';
import { ThemeSettings } from 'src';

export const generateUserCSS = async (settings: ThemeSettings) => {
    const fs = joplin.require('fs-extra');

    const {
        isEyeProtector,
    } = settings;

    const installDir = await joplin.plugins.installationDir();
    let userstyleCSS = await fs.readFile(installDir + '/userstyle_pristine.css', 'utf-8');

    if (isEyeProtector) {
        userstyleCSS = userstyleCSS.replace(/^--eye-protector-filter:.+;/, '--eye-protector-filter: none;');
        userstyleCSS = userstyleCSS.replace(/^--eye-protector-animation:.+;/, '--eye-protector-animation: none;');
    }

    await fs.writeFile(installDir + '/userstyle.css', userstyleCSS, 'utf8');
}