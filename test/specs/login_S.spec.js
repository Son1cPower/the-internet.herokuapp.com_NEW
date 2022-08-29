"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_S_page_1 = __importDefault(require("../pageobjects/login_S.page"));
const secure_S_page_1 = __importDefault(require("../pageobjects/secure_S.page"));
//import logger from '../../helpers/logger'
describe('auth form Positive Tests', () => {
    //logger.level = "debug";
    //logger.debug("Some debug messages from STAS");
    it('should allow access with correct creds', async () => {
        await login_S_page_1.default.open();
        await login_S_page_1.default.username.setValue('tomsmith');
        await login_S_page_1.default.password.setValue('SuperSecretPassword!');
        await login_S_page_1.default.submit();
        await login_S_page_1.default.flash.waitForDisplayed();
        await expect(login_S_page_1.default.flash).toHaveTextContaining('You logged into a secure area!');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //assert URL on page
        await login_S_page_1.default.checkUrl('secure');
    });
    it('should check url, text for h2 and h4 and click logout', async () => {
        //assert URL on page
        await secure_S_page_1.default.checkUrl('secure');
        await expect(secure_S_page_1.default.h2Secure).toHaveText('Secure Area');
        await expect(secure_S_page_1.default.h4Secure).toHaveText('Welcome to the Secure Area. When you are done click logout below.');
        console.log("LOGGGGGGGGGGGG", secure_S_page_1.default.textAndLindSecure);
        // await expect(Secure_S.textAndLindSecure).toHaveTextContaining('Powered by')
        await secure_S_page_1.default.logout();
        await secure_S_page_1.default.checkUrl('login');
    });
});
describe('auth form Negative Tests', () => {
    it('Put incorect passwork-should not allow access, chech report error and check that password and userName fileds are clear', async () => {
        await login_S_page_1.default.open();
        await login_S_page_1.default.username.setValue('tomsmith');
        await login_S_page_1.default.password.setValue('');
        await login_S_page_1.default.submit();
        await login_S_page_1.default.flash.waitForDisplayed();
        await expect(login_S_page_1.default.flash).toHaveTextContaining('Your password is invalid!');
        //assert URL on page
        await login_S_page_1.default.checkUrl('login');
        await expect(login_S_page_1.default.username).not.toHaveText;
        await expect(login_S_page_1.default.password).toHaveText('');
    });
    it('Put incorect UserName-should not allow access, chech report error and check that password and userName fileds are clear', async () => {
        await login_S_page_1.default.open();
        await login_S_page_1.default.username.setValue('');
        await login_S_page_1.default.password.setValue('SuperSecretPassword!');
        await login_S_page_1.default.submit();
        await login_S_page_1.default.flash.waitForDisplayed();
        await expect(login_S_page_1.default.flash).toHaveTextContaining('Your username is invalid!');
        //assert URL on page
        await login_S_page_1.default.checkUrl('login');
        await expect(login_S_page_1.default.username).not.toHaveText;
        await expect(login_S_page_1.default.password).not.toHaveText;
    });
    it('Check text for h2, h4, name for Submit Button and fileds name for password and UserName', async () => {
        await login_S_page_1.default.open();
        await expect(login_S_page_1.default.h2LoginPage).toHaveText('Login Page');
        await expect(login_S_page_1.default.h4LoginPage).toHaveText('This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.');
        await expect(login_S_page_1.default.usernameLabelLoginPage).toHaveText('Username');
        await expect(login_S_page_1.default.passwordLabelLoginPage).toHaveText('Password');
        await expect(login_S_page_1.default.submitButton).toHaveTextContaining('Login2');
        //assert URL on page
        await login_S_page_1.default.checkUrl('login');
    });
});
