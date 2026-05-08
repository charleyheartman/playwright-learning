import { Page } from '@playwright/test';

export class CheckoutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillForm(firstName: string, lastName: string, zipCode: string) {
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').fill(zipCode);
    }

    async continue() {
        await this.page.locator('[data-test="continue"]').click();
    }

    async finish() {
        await this.page.locator('[data-test="finish"]').click();
    }
}