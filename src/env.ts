import * as pathModule from 'path';
import * as dotenv from 'dotenv';
import { expand } from 'dotenv-expand';
import { existsSync } from 'fs';
import * as appRoot from 'app-root-path';

const loadedEnvs: Map<string, dotenv.DotenvConfigOutput> = new Map();

function loadEnvironment(path: string): void {
	if (!loadedEnvs.has(path)) {
		const result: dotenv.DotenvConfigOutput = expand(dotenv.config({ path }));
		if (result.error) {
			throw result.error;
		}
		loadedEnvs.set(path, result);
	}
}

const localEnvFile: string = pathModule.resolve(String(appRoot), './.env.local');
const envFile: string = pathModule.resolve(String(appRoot), './.env');

if (existsSync(localEnvFile)) {
	loadEnvironment(localEnvFile);
}

if (existsSync(envFile)) {
	loadEnvironment(envFile);
}

export { loadEnvironment };
