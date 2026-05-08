import { Page } from '@playwright/test';

export class ConfirmationPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getSuccessMessage(): Promise<string> {
        return await this.page.locator('[data-test="complete-header"]').innerText();
    }
}