"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Page {
    open(path) {
        return browser.url(path);
    }
    checkUrl(url) {
        return expect(browser).toHaveUrlContaining(`${url}`);
    }
}
exports.default = Page;
