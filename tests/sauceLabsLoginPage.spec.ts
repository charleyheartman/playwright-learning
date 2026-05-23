import { test, expect } from './fixtures';
import { SAUCEDEMO_USER, SAUCE_LABS_USER } from './data/users';

test.describe('Sauce Labs Login Page', () => { 
    test('Should log in to Sauce Labas', async({loginPage,aboutPage, sauceLoginPage,  page}) => {
        await loginPage.goto();
        await loginPage.login(SAUCEDEMO_USER);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        await aboutPage.openMenu();
        await aboutPage.clickAbout();
        await aboutPage.clickLogIn();

        await sauceLoginPage.fillForm(SAUCE_LABS_USER);
        await sauceLoginPage.submit();

})});