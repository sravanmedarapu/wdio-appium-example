import LoginPage from '../pageobjects/login.page.js'
import TabBar from '../components/tabbar.js'

class LoginSteps {

    async openLoginPage() {
        await TabBar.waitForTabBar()
        await TabBar.openLogin();
        await LoginPage.waitForPageToLoad();
    }
    
    async login(username: string, password: string) {
        await LoginPage.username(username)
        await LoginPage.password(password)
        await LoginPage.tapLoginButton()
    }

    async verifyInvalidEmailErrorMessage() {
        await expect(LoginPage.invalidEmailErrorMSG).toBeDisplayed()
    }

    async verifyInvalidPasswordErrorMessage() {
        await expect(LoginPage.invalidPasswordErrorMSG).toBeDisplayed()
    }

    async verifySuccessfullLoginAlertDisplayed() {
        await expect(LoginPage.successfulLoginAlert).toBeDisplayed()
    }

    async verifyAlertDisapperAfterAccepting() {
        expect(await LoginPage.okButton).toBeDisplayed()
        await LoginPage.tapOnOkButton();
        await expect(LoginPage.okButton).not.toBeDisplayed()
    }
}

export default new LoginSteps()