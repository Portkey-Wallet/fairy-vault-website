const nextModeBabelPlugin = require('next-babel-conditional-ssg-ssr');

const presets = ['next/babel'];
const plugins = [['import', { libraryName: 'antd', style: 'css' }]];

// or ssg, pull from `process.env.BUILD_MODE`?
process.env.SKIP_SSR && plugins.push(nextModeBabelPlugin('ssg'));

module.exports = { presets, plugins };
