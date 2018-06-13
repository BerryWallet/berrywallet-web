import path from 'path';
import fs from 'fs';

const deepAssign = require('deep-assign');
const yaml = require('js-yaml');

class ConfigObserver {
    protected config: any;

    public constructor() {
        this.config = {};
    }

    public set(key: string, value: any): ConfigObserver {
        this.merge({key: value});

        return this;
    }

    public merge(newValues: any): ConfigObserver {
        this.config = deepAssign({}, this.config, newValues);

        return this;
    }

    public loadFile(filePath: string): ConfigObserver {
        try {
            const configValue = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
            this.merge(configValue);
        } catch (error) {
            console.error(error);
        }

        return this;
    }

    public get(key: string | string[]): any {
        return this.getImpl(this.config, key);
    }

    protected getImpl(object: any, key: string | string[]): any {
        const segments: string[] = Array.isArray(key) ? key : key.split('.');
        const name = segments[0];
        const value = object[name];

        if (segments.length <= 1) {
            return value;
        }

        // Note that typeof null === 'object'
        if (value === null || typeof value !== 'object') {
            return undefined;
        }

        return this.getImpl(value, segments.slice(1));
    }
}

export const config = new ConfigObserver();

const rootPath = path.resolve('./');
const configPath = path.resolve(rootPath, './config/');

config
    .loadFile(path.resolve(configPath, 'app.yml'))
    .loadFile(path.resolve(rootPath, '.env.yml'));