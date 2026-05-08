import { Page } from '@playwright/test';


interface Credentials {
    username: string;
    password: string;
}

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(credentials: Credentials) {
        await this.page.locator('[data-test="username"]').fill(credentials.username);
        await this.page.locator('[data-test="password"]').fill(credentials.password);
        await this.page.locator('#login-button').click();
    }
}