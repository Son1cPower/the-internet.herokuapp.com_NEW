"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const wdio_shared_conf_1 = require("./wdio.shared.conf");
exports.config = {
    ...wdio_shared_conf_1.config,
    ...{
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        region: 'us',
        services: ['sauce'],
        capabilities: [{
                maxInstances: 5,
                browserName: 'firefox',
                browserVersion: 'latest',
                platformName: 'Windows 10',
                'sauce:options': {
                    build: `Build ${Math.ceil(Date.now() / 1000)}`
                }
            }]
    }
};
