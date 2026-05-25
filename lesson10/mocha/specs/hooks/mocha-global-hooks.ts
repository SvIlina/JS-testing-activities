import { initGlobal } from './global-storage';

exports.mochaGlobalSetup = function () {
    console.log('global hook');
    initGlobal();
};

exports.mochaGlobalTeardown = function () {
    console.log('global teardown');
};
