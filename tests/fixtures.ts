import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';
import { ConfirmationPage } from './ConfirmationPage';

// описываем типы наших fixtures
type Fixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    confirmationPage: ConfirmationPage;
};

// создаём расширенный test с нашими fixtures
export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    confirmationPage: async ({ page }, use) => {
        await use(new ConfirmationPage(page));
    },
});

export { expect } from '@playwright/test';