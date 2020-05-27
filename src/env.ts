import * as pathModule from 'path';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import { existsSync } from 'fs';
import * as appRoot from 'app-root-path';

const loadedEnvs: Map<string, dotenv.DotenvConfigOutput> = new Map();

function loadEnvironment(path: string): void {
	if (!loadedEnvs.has(path)) {
		loadedEnvs.set(path, dotenvExpand(dotenv.config({ path })));
	}
}

const localEnvFile: string = pathModule.resolve(String(appRoot), './.env.local');

if (existsSync(localEnvFile)) {
	loadEnvironment(localEnvFile);
}

loadEnvironment(pathModule.resolve(String(appRoot), './.env'));

export { loadEnvironment };
