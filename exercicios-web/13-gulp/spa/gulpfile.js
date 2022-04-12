const { series, parallel } = require('gulp');
const gulp = require('gulp');

const { appHTML, appCSS, appJS, appIMG } = require('./gulp-tasks/app');
const { depsCSS, depsFonts } = require('./gulp-tasks/deps');
const { monitorarArquivos, servidor } = require('./gulp-tasks/servidor');

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)