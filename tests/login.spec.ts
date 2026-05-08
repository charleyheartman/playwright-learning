import { test, expect } from './fixtures';
import { test as base } from '@playwright/test';

type LoginTestCase = {
    username: string;
    password: string;
    expectedUrl?: string;
    expectedError?: string;
};

const loginCases: LoginTestCase[] = [
    {
        username: 'standard_user',
        password: 'secret_sauce',
        expectedUrl: 'https://www.saucedemo.com/inventory.html',
    },
    {
        username: 'locked_out_user',
        password: 'secret_sauce',
        expectedError: 'Sorry, this user has been locked out',
    },
    {
        username: 'problem_user',
        password: 'secret_sauce',
        expectedUrl: 'https://www.saucedemo.com/inventory.html',
    },
    {
        username: 'standard_user',
        password: 'wrong_password',
        expectedError: 'Username and password do not match',
    },
];

test.describe('Login data-driven', () => {

    for (const testCase of loginCases) {
        test(`login as ${testCase.username} / ${testCase.password}`, async ({ loginPage, page }) => {
            await loginPage.goto();
            await loginPage.login({ 
                username: testCase.username, 
                password: testCase.password 
            });

            if (testCase.expectedUrl) {
                await expect(page).toHaveURL(testCase.expectedUrl);
            }

            if (testCase.expectedError) {
                await expect(page.locator('[data-test="error"]'))
                    .toContainText(testCase.expectedError);
            }
        });
    }

});