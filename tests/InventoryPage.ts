import { Page } from '@playwright/test';

export class InventoryPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addItemsToCart(count: number) {
    for (let i = 0; i < count; i++) {
        await this.page.locator('.btn_inventory').nth(i).click();
    }
}

    async addItemToCartByIndex(index: number) {
        await this.page.locator('.btn_inventory').nth(index).click();
    }

    async goToCart() {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }

    async addFirstItemToCart() {
        await this.page.locator('.btn_inventory').first().click();
    }
}