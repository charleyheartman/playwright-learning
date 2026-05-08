import { Page } from '@playwright/test';

export class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
}

    async getItemCount(): Promise<number> {
        const items = await this.page.locator('[data-test="inventory-item"]').count();
        return items;
    }

}