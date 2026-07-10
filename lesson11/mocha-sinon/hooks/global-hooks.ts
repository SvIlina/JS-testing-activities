import { globalSetup } from '../src/global-setup';

exports.mochaGlobalSetup = function () {
    console.log('Global setup code lives here');
    globalSetup();
};

exports.mochaGlobalTeardown = function () {
    console.log('Global teardown code lives here');
};
