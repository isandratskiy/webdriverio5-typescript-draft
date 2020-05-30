const timeout = process.env.DEBUG ? 99999999 : 30000;

const wdioConfig = {
    runner: 'local',
    path: '/',
    specs: [
        './test/**/*.ts',
        './test/**/*.js'
    ],
    exclude: [
        //'path/to/excluded/files'
    ],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                useAutomationExtension: false,
                excludeSwitches: [
                    'enable-automation'
                ],
                prefs: {
                    credentials_enable_service: false,
                    'profile.password_manager_enabled': false
                },
                args: [
                    'disable-infobars',
                    '--disable-gpu',
                    '--no-sandbox',
                    '--disable-extensions',
                    '--disable-dev-shm-usage',
                    '--headless',

                ]
            }
        }
    ],
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [
        "chromedriver"
    ],
    framework: 'mocha',
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
            }
        ]
    ],
    mochaOpts: {
        compilers: [
            'tsconfig-paths/register'
        ],
        ui: 'bdd',
        timeout: timeout
    },
    before: function (capabilities, specs) {
        require('ts-node').register({
            files: true
        });
    },
    afterTest: function (test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
        browser.reloadSession();
    }
};

if (process.env.SELENOID) {
    wdioConfig.services = undefined;
    wdioConfig.hostname = process.env.SELENOID;
    wdioConfig.port = 4444;
    wdioConfig.path = "/wd/hub";
} else wdioConfig.services = ["chromedriver"];

exports.config = wdioConfig;