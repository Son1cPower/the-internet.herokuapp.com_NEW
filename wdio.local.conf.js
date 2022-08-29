"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const wdio_shared_conf_1 = require("./wdio.shared.conf");
exports.config = {
    ...wdio_shared_conf_1.config,
    ...{
        capabilities: [{
                browserName: 'chrome',
                'wdio:devtoolsOptions': {
                    headless: false
                }
            }]
    }
};
