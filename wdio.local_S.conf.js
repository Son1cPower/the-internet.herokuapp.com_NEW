"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const wdio_shared_conf_1 = require("./wdio.shared.conf");
exports.config = {
    ...wdio_shared_conf_1.config,
    ...{
        specs: [
            './test/specs/**/login_S.spec.ts'
        ],
        suites: {
            smoke: [
                './test/specs/**/login_S.spec.ts',
                // './test/specs/**/contact.js'
            ],
            component: [
            //  './test/specs/**/nav.js'
            ]
        },
        capabilities: [{
                browserName: 'chrome',
                'wdio:devtoolsOptions': {
                    headless: false
                }
            }]
    }
};
