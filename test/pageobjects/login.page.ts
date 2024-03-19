import { $ } from '@wdio/globals'
import Page from './page.js';
class LoginPage extends Page {

    get pageId() {
        return this.loginFormHeader
    }

    private get loginFormHeader(): Promise<WebdriverIO.Element> {
        return $("//android.widget.TextView[@text='Login / Sign up Form']")
    }

    public async username(username: string) {
        await $('~input-email').setValue(username);
    }

    async password(password: string) {
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

     get successfulLoginAlert() {
        return $("//android.widget.TextView[@text='You are logged in!']")
    }

    async tapOnOkButton() {
        await this.okButton.click();
    }
}

export default new LoginPage();
