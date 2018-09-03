const Router = require('koa-router');
const url = require("url");
const base64 = require("js-base64");
const request = require('request');

const route = new Router();

module.exports = (app) => {
  route.get('/report/*/:reportUrl', async (ctx, next) => {
    try {
      // 如果请求的url是pdf则去掉扩展名
      let _url = ctx.params.reportUrl.replace('.pdf', '');
      let urlStr = base64.Base64.decode(_url);
      let urlObj = url.parse(urlStr);

      if (urlObj.href.indexOf('.pdf') > 0) {
        ctx.response.type = 'application/pdf';
      } else {
        ctx.response.type = 'text/html';
      }

      ctx.body = ctx.req.pipe(request(urlObj.href));

    } catch (e) {
      ctx.throw(e);
    }
  });
  route.get(/^((?!\.js).)+$/, async (ctx, next) => {
    const apiUrl = [
      `window.__PMSAPI__ = '${process.env.PMSAPI}'`,
      `window.__POSAPI__ = '${process.env.POSAPI}'`,
      `window.__LPSAPI__ = '${process.env.LPSAPI}'`,
      `window.__CRMAPI__ = '${process.env.CRMAPI}'`,
      `window.__CRSAPI__ = '${process.env.CRSAPI}'`,
      `window.__EBSAPI__ = '${process.env.EBSAPI}'`,
      `window.__SCMAPI__ = '${process.env.SCMAPI}'`,
      `window.__RPTAPI__ = '${process.env.RPTAPI}'`,
      `window.__IIRAPI__ = '${process.env.IIRAPI}'`,
      `window.__GFCAPI__ = '${process.env.GFCAPI}'`,
      `window.__GRPAPI__ = '${process.env.GRPAPI}'`,
      `window.__CRMSAPI__ = '${process.env.CRMSAPI}'`
    ]
    const apiInit = apiUrl.join(';');
    await ctx.render(process.env.INDEXFILE || 'index', { apiInit });
  })

  app.use(route.routes());
}