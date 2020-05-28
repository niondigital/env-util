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
        var result = dotenvExpand(dotenv.config({ path: path }));
        if (result.error) {
            throw result.error;
        }
        loadedEnvs.set(path, result);
    }
}
exports.loadEnvironment = loadEnvironment;
var localEnvFile = pathModule.resolve(String(appRoot), './.env.local');
var envFile = pathModule.resolve(String(appRoot), './.env');
if (fs_1.existsSync(localEnvFile)) {
    loadEnvironment(localEnvFile);
}
if (fs_1.existsSync(envFile)) {
    loadEnvironment(envFile);
}
