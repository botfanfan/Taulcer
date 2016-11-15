// 若要执行文档转换，先执行gulp, 再执行 gulp i
const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
const del = require('del');
const fs = require('fs');
const markdown = require('gulp-markdown');
const util = require('./util');
const config = require('./config.json');
var DOCUMENT_DEST = config.docDist;
var DOCUMENT_SRC = config.docSrc;

// 清空util文件夹
gulp.task('clean-doc', function () {
  del.sync(DOCUMENT_DEST + '/*', {force: true});
});

// 清空除了index.html之外的util文件夹
gulp.task('i', function () {
  del.sync([DOCUMENT_DEST + '/*', '!' + DOCUMENT_DEST + 'index.html'], {force: true});
});

// 移动其他文件至目标文件
gulp.task('move-doc', ['clean-doc'], function (cb) {
  gulp.src([DOCUMENT_SRC + '**/*', '!' + DOCUMENT_SRC + 'md/**/*'])
      .pipe((gulp.dest(DOCUMENT_DEST)))
      .on('end', cb);
});

// 将doc的md文件转换为html文件放入目标文件夹
gulp.task('c', ['move-doc'], function (cb) {
  gulp.src(DOCUMENT_SRC + 'md/**/*')
      .pipe(markdown())
      .pipe(gulp.dest(DOCUMENT_DEST + 'md/'))
      .on('end', cb);
});

// 将各个页面拼接
gulp.task('p', ['c'], function (cb) {
  var catas,
    structure,
    stream,
    htmls,
    docList,
    htmlRoot;
  htmlRoot = DOCUMENT_DEST + 'md/';
  catas = fs.readdirSync(htmlRoot);
  docList = fs.createWriteStream(DOCUMENT_DEST + 'doc_list.html');
  // 构造内容对象
  structure = util.scanOption(catas, htmlRoot);
  htmls = structure && structure.htmls;
  if (htmls.length) {
    concatHTML();
  }

  // html片段拼接
  function concatHTML () {
    if (!htmls.length) {
      docList.end();
      util.generate(structure.lists);
      return;
    }
    var currentfile = htmlRoot + htmls.shift();
    stream = fs.createReadStream(currentfile);
    stream.pipe(docList, {end: false});
    stream.on('end', function () {
      concatHTML();
    });
  }
});

// 默认任务
/* gulp.task('default', function () {
  gulp.start('p');
}); */

// gulp.task('default', gulpsync.sync(['c', 'p', 'i']));
gulp.task('default', gulpsync.sync(['p', 'i']));

