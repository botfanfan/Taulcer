var fs = require('fs'),
  cheerio = require('cheerio'),
  config = require('./config.json');
var DOCUMENT_DEST = config.docDist;
module.exports = {
  /**
   * 扫描md目录生成目录结构对象
   * @param catas
   * @param htmlRoot
   * @returns {{}}
   */
  scanOption: function (catas, htmlRoot) {
    var files,
      temp,
      structure = {},
      lists = [],
      htmls = [];
    if (catas.length) {
      catas.forEach(function (cata) {
        temp = {};
        temp.name = cata;
        temp.children = [];
        files = fs.readdirSync(htmlRoot.concat(cata));
        if (files.length) {
          // 排序
          files = files.sort();
          // 改成目录/文件的形式
          files = files.map(function (item) {
            var len = item.indexOf('.') >= 0 ? item.indexOf('.') : undefined;
            var name = item.substring(0, len);
            var path = cata + '/' + item;
            temp.children.push(name);
            return path;
          });
          htmls = htmls.concat(files);
        }
        lists.push(temp);
      });
      structure.lists = lists;
      structure.htmls = htmls;
    }
    return structure;
  },
  /**
   * 生成文档左侧目录
   * @param lists 根据目录扫描之后形成的数组
   * @returns {string} 返回构造好的目录字符串
   */
  generateList: function (lists) {
    var content = [];
    if (lists.length) {
      lists.forEach(function (item) {
        content.push('<div class=""> <h2><i class="faa fopen" title="Collapse Category"></i>' + item.name + '</h2>');
        if (item.children) {
          content.push('<ul class="">');
          item.children.forEach(function (li) {
            content.push('<li><a href =#' + li.toLocaleLowerCase() + '><code>' + li + '</code></a></li>');
          });
          content.push('</ul>');
        }
        content.push('</div>');
      });
    }
    return content.join('');
  },
  /**
   * 将生成的html片段插入到页面
   * @param lists
   */
  generate: function (lists) {
    var $,
      index,
      list,
      date,
      content,
      indexPath,
      contentPath;
    date = new Date();
    indexPath = DOCUMENT_DEST + 'index.html';
    contentPath = DOCUMENT_DEST + 'doc_list.html';
    index = fs.readFileSync(indexPath,'utf8');
    content = fs.readFileSync(contentPath,'utf8');
    list = this.generateList(lists);
    $ = cheerio.load(index);
    $('.container span[data-type=date]').html(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    $('#doc-catalist').replaceWith(list);
    $('#doc-container').html(content);
    fs.writeFile(indexPath, $.html(), function (err) {
      if (err) {
        console.log('write fail');
      }else{
        console.log('write success');
      }
    });
  }
};
