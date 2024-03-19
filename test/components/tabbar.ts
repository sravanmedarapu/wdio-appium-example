

class TabBar {

    private static async home() {
        return $("~Home")
    }

    static async openLogin() {
        await $("~Login").click()
    }

    static async waitForTabBar() {
     (await TabBar.home()).waitForDisplayed();
    }
}

export default TabBar


