import {Page}  from '@playwright/test';

// SauceLabsLoginPage.ts — форма входа на accounts.saucelabs.com
interface Credentials {
    username: string;
    password: string;
}

export class SauceLabsLoginPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillForm(credentials: Credentials) {
        await this.page.locator('#idToken1').fill(credentials.username);
        await this.page.locator('#idToken2').fill(credentials.password);
    }

    async submit() {
        await this.page.locator('#loginButton_0').click();
    }
}