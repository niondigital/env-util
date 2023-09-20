"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnvironment = void 0;
var pathModule = require("path");
var dotenv = require("dotenv");
var dotenv_expand_1 = require("dotenv-expand");
var fs_1 = require("fs");
var appRoot = require("app-root-path");
var loadedEnvs = new Map();
function loadEnvironment(path) {
    if (!loadedEnvs.has(path)) {
        var result = (0, dotenv_expand_1.expand)(dotenv.config({ path: path }));
        if (result.error) {
            throw result.error;
        }
        loadedEnvs.set(path, result);
    }
}
exports.loadEnvironment = loadEnvironment;
var localEnvFile = pathModule.resolve(String(appRoot), './.env.local');
var envFile = pathModule.resolve(String(appRoot), './.env');
if ((0, fs_1.existsSync)(localEnvFile)) {
    loadEnvironment(localEnvFile);
}
if ((0, fs_1.existsSync)(envFile)) {
    loadEnvironment(envFile);
}
