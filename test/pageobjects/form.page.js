"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
class FormPage extends page_1.default {
    /**
     * define elements
     */
    get username() { return $('#username'); }
    get password() { return $('#password'); }
    get submitButton() { return $('#login button[type=submit]'); }
    get flash() { return $('#flash'); }
    /**
     * define or overwrite page methods
     */
    open() {
        return super.open('login');
    }
    async submit() {
        await this.submitButton.click();
    }
}
exports.default = new FormPage();
