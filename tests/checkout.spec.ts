import { test, expect } from './fixtures';

test.describe('checkout goods in Basket', () => {

    test('add goods to basket', async ({ loginPage, inventoryPage, cartPage, checkoutPage, confirmationPage, page }) => {
        await loginPage.goto();
        await loginPage.login({ username: 'standard_user', password: 'secret_sauce' });
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await inventoryPage.addItemsToCart(4); // добавить 4 товара
        await inventoryPage.goToCart();
        const count = await cartPage.getItemCount();
        expect(count).toBe(4);
        await cartPage.goToCheckout(); 
        await checkoutPage.fillForm('John', 'Doe', '12345');
        await checkoutPage.continue();
        await checkoutPage.finish();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
        const message = await confirmationPage.getSuccessMessage();
expect(message).toBe('Thank you for your order!');
    });
});