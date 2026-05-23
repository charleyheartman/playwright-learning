import {Page}  from '@playwright/test';

export class AboutPage {
    private page: Page;

    constructor (page:Page) {
        this.page = page;
    }

        async openMenu() {
            await this.page.locator('#react-burger-menu-btn').click();
        }

        async clickAbout() {
            await this.page.locator('[data-test="about-sidebar-link"]').click();
        }

        async clickLogIn() {
        await this.page.getByRole('button', { name: 'Log In' }).click();
        }
    }
