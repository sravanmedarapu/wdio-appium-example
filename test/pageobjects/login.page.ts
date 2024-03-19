import { $ } from '@wdio/globals'
import Page from './page.js';
class LoginPage extends Page {

    get pageId() {
        return this.loginFormHeader
    }

    private get loginFormHeader(): Promise<WebdriverIO.Element> {
        return $("//android.widget.TextView[@text='Login / Sign up Form']")
    }

    public async typeUsername(username: string) {
        await $('~input-email').setValue(username);
    }

    async typePassword(password: string) {
        await $('~input-password').setValue(password);
    }

    async tapLoginButton() {  
        await $('~button-LOGIN').click();
    }

    get invalidEmailErrorMSG() { return $('//android.widget.TextView[@text="Please enter a valid email address"]') }
    get invalidPasswordErrorMSG() { return $('//android.widget.TextView[@text="Please enter at least 8 characters"]') }

    get okButton() {
        return $('//android.widget.Button[@text="OK"]')
    }

     async isLoginSuccessfullAleterDisplayed(): Promise<Boolean> {
        return  await $("//android.widget.TextView[@text='You are logged in!']").waitForDisplayed()
    }

    async tapOnOkButton() {
        await this.okButton.click();
    }
    async isOkButtonDisplayed(isShown: boolean) {
       return await this.okButton.waitForDisplayed( { 
        reverse:!isShown,
        timeout: 1000
    })
    }
}

export default new LoginPage();
