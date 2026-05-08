import { test, expect } from './fixtures';

test.describe('Saucedemo with fixtures', () => {

    test('successful login', async ({ loginPage, page }) => {
        await loginPage.goto();
        await loginPage.login({ username: 'standard_user', password: 'secret_sauce' });
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('Item in basket', async ({ loginPage, inventoryPage, cartPage, page }) => {
        await loginPage.goto();
        await loginPage.login({ username: 'standard_user', password: 'secret_sauce' });
        await inventoryPage.addItemToCartByIndex(1);
        await inventoryPage.goToCart();
        const count = await cartPage.getItemCount();
        expect(count).toBe(1);
    });

    test('Check item in basket', async ({ loginPage, inventoryPage, page }) => {
        await loginPage.goto();
        await loginPage.login({ username: 'standard_user', password: 'secret_sauce' });
        await inventoryPage.addItemToCartByIndex(1);
        await inventoryPage.goToCart();
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    });

});