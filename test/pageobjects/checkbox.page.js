"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
class CheckboxPage extends page_1.default {
    /**
     * define elements
     */
    get lastCheckbox() { return $('#checkboxes input:last-Child'); }
    get firstCheckbox() { return $('#checkboxes input:first-Child'); }
    /**
     * define or overwrite page methods
     */
    open() {
        return super.open('checkboxes');
    }
}
exports.default = new CheckboxPage();
