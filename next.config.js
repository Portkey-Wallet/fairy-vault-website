/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const { ANALYZE, NODE_ENV } = process.env;
const pluginConfig = require('./build/plugin');
const development = require('./build/development');
const production = require('./build/production');

const config = ANALYZE === 'true' || NODE_ENV === 'production' ? production : development;
const withTM = require('next-transpile-modules')(['antd']);

module.exports = withPlugins(pluginConfig, withTM(config));
