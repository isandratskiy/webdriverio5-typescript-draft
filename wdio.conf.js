const timeout = process.env.DEBUG ? 99999999 : 30000;

const wdioConfig = {
    runner: 'local',
    path: '/',
    specs: [
        './test/**/*.ts',
        './test/**/*.js'
    ],
    capabilities: [
        {
            maxInstances: 5,
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
                    '--disable-infobars',
                    '--disable-gpu',
                    '--no-sandbox',
                    '--disable-extensions',
                    '--disable-dev-shm-usage'
                ]
            }
        }
    ],
    logLevel: 'error',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableMochaHooks: true
    }]],
    mochaOpts: {
        require: 'ts-node/register',
        compilers: ['tsconfig-paths/register'],
        ui: 'bdd',
        timeout: timeout
    },
    afterTest: function (test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }

    }
};

if (process.env.SELENOID) {
    wdioConfig.services = undefined;
    wdioConfig.hostname = process.env.SELENOID;
    wdioConfig.port = 4444;
    wdioConfig.path = "/wd/hub";
} else wdioConfig.services = ['chromedriver'];

exports.config = wdioConfig;
