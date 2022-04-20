const LoginPage = require('../pageobjects/login.page');
const TestHomePage = require('../pageobjects/TestHomePage');
const SecurePage = require('../pageobjects/secure.page');
const { assert } = require('chai');
//const home = new TestHomePage();

describe('My Login application', () => {
    it('should login with valid credentials', async () => {      
        await LoginPage.maximize();
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        await TestHomePage.Logout();
        const expectedPageText = "You logged out of the secure area!";
        await expect(TestHomePage.actualPageText.getText()).toBe.toEqual(expectedPageText);
        //await assert(TestHomePage.actualPageText.getText(),expectedPageText,'Home page text is incorrect!');
        
    });
});



