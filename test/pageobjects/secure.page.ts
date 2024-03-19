import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    get pageId(): any {
        throw new Error('Method not implemented.');
    }
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
