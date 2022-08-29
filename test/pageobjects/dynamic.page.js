"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
class DynamicPage extends page_1.default {
    /**
     * define elements
     */
    get btnStart() { return $('button=Start'); }
    get loadedPage() { return $('#finish'); }
    /**
     * define or overwrite page methods
     */
    open() {
        return super.open('dynamic_loading/2');
    }
}
exports.default = new DynamicPage();
