
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default abstract class Page {
    abstract get pageId(): Promise<WebdriverIO.Element>;
 
   async waitForPageToLoad() {
        return (await this.pageId).waitForDisplayed()
    }
}
