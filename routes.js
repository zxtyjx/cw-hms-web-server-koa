const route = require("koa-route");
const http = require("http");
const url = require("url");
const base64 = require("js-base64");
const fs = require("fs.promised");

module.exports = (app) => {
  app.use(route.get('/report/*/:reportUrl', (ctx) => {
    try {
      // 如果请求的url是pdf则去掉扩展名
      let _url = ctx.request.params.reportUrl.replace('.pdf', '');
      let urlStr = base64.Base64.decode(_url);
      let urlObj = url.parse(urlStr);
      let options = {
        hostname: urlObj.hostname,
        port: urlObj.port,
        method: "GET",
        path: urlObj.path
      };
      var sreq = http.request(options, function (sres) {
        sres.pipe(ctx.request);
      });
      sreq.end();
    } catch (e) {
      ctx.throw(e);
    }
  }));
  app.use(route.get(/^((?!\.js).)+$/, async (ctx, next) => {
    const indexHtml = process.env.VERSION ? `"./views/${process.env.VERSION}/index.html"` : "./views/index.html";
    ctx.response.type = "html";
    ctx.response.body = await fs.readFile(indexHtml);
    // res.sendfile('./views/index.html');
  }))
}