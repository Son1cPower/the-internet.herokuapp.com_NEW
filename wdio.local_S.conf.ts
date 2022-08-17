import { config as sharedConfig } from './wdio.shared.conf'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
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
}
