# wdio-scratchpad

# How to run locally
- npm install
- Start appium sevice(default 4723) and launch emulator
- npm run wdio

Approach on Page object model:

Test:
- high level code
```typescript
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
```

LoginStep
- orchestration layer 
```typescript

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
```

PageObject:
- low-level code without assertion and additional logic
```typescript
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

    get invalidEmailErrorMSG() { 
        return $('//android.widget.TextView[@text="Please enter a valid email address"]')
    }

    get invalidPasswordErrorMSG() {
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]')
    }

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

```
