"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
const logger_1 = __importDefault(require("../../helpers/logger"));
logger_1.default.level = "debug";
logger_1.default.debug("START - login_S.page.ts");
class LoginPage_S extends page_1.default {
    /**
     * define elements
     */
    get username() {
        const username = '#username';
        logger_1.default.debug(`Get element username with selector ${username}`);
        return $(username);
    }
    get password() {
        const password = '#password';
        logger_1.default.debug(`Get element password with selector ${password}`);
        return $(password);
    }
    get submitButton() {
        const submitButton = '#login button[type=submit]';
        logger_1.default.debug(`Get element submitButton with selector ${submitButton}`);
        return $(submitButton);
    }
    get flash() {
        const flash = '#flash';
        logger_1.default.debug(`Get element flash with selector ${flash}`);
        return $(flash);
    }
    /**
     * define or overwrite page methods
     */
    open() {
        return super.open('login');
    }
    async submit() {
        const submitButton = '#login button[type=submit]';
        logger_1.default.debug(`click element submitButton with selector ${submitButton}`);
        await this.submitButton.click();
    }
    //////////////////////////////////////////////////////////////////////////////////////////
    get h2LoginPage() {
        const h2LoginPage = 'h2';
        logger_1.default.debug(`Get element h2LoginPage with selector ${h2LoginPage}`);
        return $(h2LoginPage);
    }
    get h4LoginPage() {
        const h4LoginPage = 'h4';
        logger_1.default.debug(`Get element h4LoginPage with selector ${h4LoginPage}`);
        return $(h4LoginPage);
    }
    get usernameLabelLoginPage() {
        const usernameLabelLoginPage = 'label[for="username"]';
        logger_1.default.debug(`Get element usernameLabelLoginPage with selector ${usernameLabelLoginPage}`);
        return $(usernameLabelLoginPage);
    }
    get passwordLabelLoginPage() {
        const passwordLabelLoginPage = 'label[for="password"]';
        logger_1.default.debug(`Get element passwordLabelLoginPage with selector ${passwordLabelLoginPage}`);
        return $(passwordLabelLoginPage);
    }
}
exports.default = new LoginPage_S();
