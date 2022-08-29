"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_page_1 = __importDefault(require("../pageobjects/form.page"));
describe('auth form', () => {
    it('should deny access with wrong creds', async () => {
        await form_page_1.default.open();
        await form_page_1.default.username.setValue('foo');
        await form_page_1.default.password.setValue('bar');
        await form_page_1.default.submit();
        await form_page_1.default.flash.waitForDisplayed();
        await expect(form_page_1.default.flash).toHaveTextContaining('Your username is invalid!');
    });
    it('should allow access with correct creds', async () => {
        await form_page_1.default.open();
        await form_page_1.default.username.setValue('tomsmith');
        await form_page_1.default.password.setValue('SuperSecretPassword!');
        await form_page_1.default.submit();
        await form_page_1.default.flash.waitForDisplayed();
        await expect(form_page_1.default.flash).toHaveTextContaining('You logged into a secure area!');
    });
});
