import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'


describe('My Login application', ()=> {
    it('User should not be abel to login with username lessthan 8 chars', async () => {
        var home = await $('~Home')

        await home.waitForDisplayed({
            timeout: 20000,
        });

        (await $('~Login')).click();

        var username = await $('~input-email');
        var password = await $('~input-password');
        var loginButton = await $('~button-LOGIN');
        await username.waitForDisplayed();
        await username.setValue('user@we');
        await password.setValue('fake');
        await loginButton.click();

        expect($('//android.widget.TextView[@text="Please enter a valid email address"]')).toBeDisabled()
        expect($('//android.widget.TextView[@text="Please enter at least 8 characters"]')).toBeDisabled()
})

    it('User should be abel to login', async () => {
        var home = await $('~Home')

        await home.waitForDisplayed({
            timeout: 20000,
        });

        (await $('~Login')).click();

        var username = await $('~input-email');
        var password = await $('~input-password');
        var loginButton = await $('~button-LOGIN');
        await username.waitForDisplayed();
        await username.setValue('user@webdiver.io');
        await password.setValue('fakePass');
        await loginButton.click();

        var successAlert = await $("//android.widget.TextView[@text='You are logged in!']")
        successAlert.waitForDisplayed();
        (await $('//android.widget.Button[@text="OK"]')).click();
        await expect(home).toBeDisplayed();
})
})

