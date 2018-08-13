const Koa = require('koa');
const http = require('http');
const path = require('path');
const composes = require('koa-compose');
const koabody = require('koa-body');
const favicon = require('koa-favicon');
const koastatic = require('koa-static');
const koacompress = require('koa-compress');
const views = require('koa-views');
const ejs = require('ejs');

const packageHtml = require('./lib/file-handle');
const normalizePort = require('./lib/normalize-port');
const handler = require('./lib/error');
const routes = require('./routes');

const port = normalizePort(process.env.PORT || 3000);
// const sslport = normalizePort(process.env.SSLPORT || '3050');



const app = new Koa();

// #region 应用基础中间件
// 解析body-json数据
app.use(koabody());
// gzip压缩
app.use(koacompress());
// 静态资源
app.use(koastatic(`build`));
// 网站图标
app.use(favicon(`build/favicon.ico`));
// 设置view模版
app.use(views(__dirname + '/views', {
  map: { html: 'ejs' }
}));
// #endregion

// #region 业务处理
// 错误处理中间件
app.use(handler);
// 设置业务路由
routes(app);
// #endregion

// #region 事件处理
app.on('error', (err, ctx) => {
  console.error('server error', err);
})
// #endregion




async function startServer() {
  //整理index.html
  await packageHtml();
  console.log('1111');
  
  http.createServer(app.callback()).listen(port, () => {
    console.log('HTTP Server is running port on: ', port);
  });
}

startServer();