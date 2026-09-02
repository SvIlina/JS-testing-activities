import { BrowserContextOptions, chromium } from 'playwright';
import * as fs from 'fs';
// import { world } from './vitest-global-setup';


export default async function (): Promise<void> {
    // const config = world.configService.getConfig();

    // if (config.auth.rdApi.token) {
    //     return;
    // }

    const browser = await chromium.launch({ headless: false });

    const browserOptions: BrowserContextOptions = {};
    const storageStatePath = 'storage-state.json';
    if (fs.existsSync(storageStatePath)) {
        browserOptions.storageState = storageStatePath;
    }
    const browserContext = await browser.newContext(browserOptions);

    const page = await browserContext.newPage();

    const tokenResponse = page.waitForRequest((request) =>
        request.url().includes('https://lms.academius.io/api/graphql')
    , { timeout: 60000 });

    await page.goto('https://lms.robotdreams.cc/login?next=/teacher/course/5307', { waitUntil: 'domcontentloaded' });

    // const loginButton = page.locator('button[type="submit"]');
    // const emailInput = page.locator('#email');
    // await emailInput.waitFor({ state: 'visible', timeout: 5000 });
    // if (await emailInput.isVisible()) {
    //     await emailInput.fill(config.auth.rdApi.userName);
    //     await page.locator('#password').fill(config.auth.rdApi.password);
    //     await loginButton.click();
    // }

    const request = await tokenResponse;

    const headers = request.headers();
    const token = headers['authorization'].replace('Bearer ', '');
    console.log('Token: ', token);

    await page.context().storageState({ path: storageStatePath });

    // world.configService.updateJwtToken(token);

    await page.close();
    await browserContext.close();
    await browser.close();
};
