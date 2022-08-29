"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamic_page_1 = __importDefault(require("../pageobjects/dynamic.page"));
describe('dynamic loading', function () {
    it('should be an button on the page', async () => {
        await dynamic_page_1.default.open();
        await expect(dynamic_page_1.default.loadedPage).not.toBePresent();
        await dynamic_page_1.default.btnStart.click();
        await dynamic_page_1.default.loadedPage.waitForExist();
        await expect(dynamic_page_1.default.loadedPage).toBePresent();
    });
});
