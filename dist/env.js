"use strict";
exports.__esModule = true;
var pathModule = require("path");
var dotenv = require("dotenv");
var dotenvExpand = require("dotenv-expand");
var fs_1 = require("fs");
var appRoot = require("app-root-path");
var loadedEnvs = new Map();
function loadEnvironment(path) {
    if (!loadedEnvs.has(path)) {
        loadedEnvs.set(path, dotenvExpand(dotenv.config({ path: path })));
    }
}
exports.loadEnvironment = loadEnvironment;
var localEnvFile = pathModule.resolve(String(appRoot), './.env.local');
if (fs_1.existsSync(localEnvFile)) {
    loadEnvironment(localEnvFile);
}
loadEnvironment(pathModule.resolve(String(appRoot), './.env'));
