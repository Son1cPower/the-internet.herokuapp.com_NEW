"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
const logger_1 = __importDefault(require("../../helpers/logger"));
logger_1.default.level = "debug";
logger_1.default.debug("START - Secure_S.page.ts");
class Secure_S extends page_1.default {
    /**
     * define elements
     */
    get h2Secure() {
        const h2Secure = 'h2';
        logger_1.default.debug(`Secure_S.page.ts - Get element h2 with selector ${h2Secure}`);
        return $(h2Secure);
    }
    get h4Secure() {
        const h4Secure = 'h4';
        logger_1.default.debug(`Get element h4 with selector ${h4Secure}`);
        return $(h4Secure);
    }
    get logoutButton() {
        const logoutButton = '.button.secondary.radius, a[href="/logout"]';
        logger_1.default.debug(`Get element logoutButton with selector ${logoutButton}`);
        return $(logoutButton);
    }
    get textAndLindSecure() {
        const textAndLindSecure = '.large-4.large-centered.columns';
        logger_1.default.debug(`Get element textAndLindSecure with selector ${textAndLindSecure}`);
        return $(textAndLindSecure);
    }
    get url() { return document.URL; }
    async logout() {
        const logoutButton = '.button.secondary.radius, a[href="/logout"]';
        logger_1.default.debug(`Click element logoutButton with selector ${logoutButton}`);
        await this.logoutButton.click();
    }
}
exports.default = new Secure_S();
