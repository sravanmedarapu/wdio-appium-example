import LoginStep from '../steps/login.step.js'

beforeEach('setup', async () => {
    await LoginStep.openLoginPage();
})

describe('My Login application', () => {
    it('User should not be abel to login with username lessthan 8 chars', async () => {
        await LoginStep.login("user1", "passw");
        await LoginStep.verifyInvalidEmailErrorMessage();
        await LoginStep.verifyInvalidPasswordErrorMessage();
    })

    it('User should be abel to login', async () => {
         await LoginStep.login("useremail@webdriver.io", "password");
         await LoginStep.verifySuccessfullLoginAlertDisplayed();
         await LoginStep.verifyAlertDisapperAfterAccepting();
    })
})

