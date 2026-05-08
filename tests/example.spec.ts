import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';

test.describe('Saucedemo login', () => {

   test('login via page object', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login({username: 'standard_user', password: 'secret_sauce'});
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

    test('login with incorrect password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login({username: 'standard_user', password: 'wrong_password'});
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
    });


    test('Add a inventory in the basket', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await loginPage.goto();
        await loginPage.login({username: 'standard_user', password: 'secret_sauce'});
        await inventoryPage.addItemToCartByIndex(1);
        await inventoryPage.goToCart();
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
        await expect(page.locator('[data-test="inventory-item-name"]'))
    .toContainText('Sauce Labs Bike Light');

    });

    test('Add first item in the baskt', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await loginPage.goto();
        await loginPage.login({username: 'standard_user', password: 'secret_sauce'});
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.goToCart();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('[data-test="inventory-item-name"]'))
        .toContainText('Sauce Labs Backpack');
    });
});