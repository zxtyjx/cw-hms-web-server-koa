const Koa = require('koa');
const http = require('http');
const path = require('path');
const koabody = require('koa-body');
const favicon = require('koa-favicon');
const koastatic = require('koa-static');
const koacompress = require('koa-compress');
const views = require('koa-views');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');

const packageHtml = require('./lib/file-handle');
const normalizePort = require('./lib/normalize-port');
const handler = require('./lib/error');
const routes = require('./routes');

const port = normalizePort(process.env.PORT || 3000);
// const sslport = normalizePort(process.env.SSLPORT || '3050');



const app = new Koa();

// #region 应用基础中间件
// etag 增加缓存304状态码处理
app.use(conditional());
app.use(etag());
// 解析body-json数据
app.use(koabody());
// gzip压缩
app.use(koacompress({threshold:2048}));
// 静态资源
app.use(koastatic(path.join(process.env.RESDIR || __dirname, `/build`)));
// 网站图标
app.use(favicon(`build/favicon.ico`));
// 设置view模版
app.use(views(path.join(process.env.RESDIR || __dirname, `/views`), {
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

  http.createServer(app.callback()).listen(port, () => {
    console.log('HTTP Server is running port on: ', port);
  });
}

startServer();