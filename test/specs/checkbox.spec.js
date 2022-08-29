"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkbox_page_1 = __importDefault(require("../pageobjects/checkbox.page"));
describe('checkboxes', () => {
    it('checkbox 2 should be enabled', async () => {
        await checkbox_page_1.default.open();
        await expect(checkbox_page_1.default.firstCheckbox).not.toBeSelected();
        await expect(checkbox_page_1.default.lastCheckbox).toBeSelected();
    });
    it('checkbox 1 should be enabled after clicking on it', async () => {
        await checkbox_page_1.default.open();
        await expect(checkbox_page_1.default.firstCheckbox).not.toBeSelected();
        await checkbox_page_1.default.firstCheckbox.click();
        await expect(checkbox_page_1.default.firstCheckbox).toBeSelected();
    });
});
