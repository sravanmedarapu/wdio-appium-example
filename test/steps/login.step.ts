import LoginPage from '../pageobjects/login.page.js'
import TabBar from '../components/tabbar.js'

class LoginSteps {

    async openLoginPage() {
        await TabBar.waitForTabBar()
        await TabBar.openLogin();
        await LoginPage.waitForPageToLoad();
    }
    
    async login(username: string, password: string) {
        await LoginPage.typeUsername(username)
        await LoginPage.typePassword(password)
        await LoginPage.tapLoginButton()
    }

    async verifyInvalidEmailErrorMessage() {
         await expect(LoginPage.invalidEmailErrorMSG).toBeDisplayed()
    }

    async verifyInvalidPasswordErrorMessage() {
        await expect(LoginPage.invalidPasswordErrorMSG).toBeDisplayed()
    }

    async verifySuccessfullLoginAlertDisplayed() {
        await expect(await LoginPage.isLoginSuccessfullAleterDisplayed()).toBe(true)
    }

    async verifyAlertDisapperAfterAccepting() {
        await LoginPage.isOkButtonDisplayed(true)
        await LoginPage.tapOnOkButton();
        await LoginPage.isOkButtonDisplayed(false)
    }
}

export default new LoginSteps()