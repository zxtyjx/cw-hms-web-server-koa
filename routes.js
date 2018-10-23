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
    const apiUrl = [];

    process.env.PMSAPI && apiUrl.push(`window.__PMSAPI__ = '${process.env.PMSAPI}'`);
    process.env.POSAPI && apiUrl.push(`window.__POSAPI__ = '${process.env.POSAPI}'`);
    process.env.LPSAPI && apiUrl.push(`window.__LPSAPI__ = '${process.env.LPSAPI}'`);
    process.env.CRMAPI && apiUrl.push(`window.__CRMAPI__ = '${process.env.CRMAPI}'`);
    process.env.CRSAPI && apiUrl.push(`window.__CRSAPI__ = '${process.env.CRSAPI}'`);
    process.env.EBSAPI && apiUrl.push(`window.__EBSAPI__ = '${process.env.EBSAPI}'`);
    process.env.SCMAPI && apiUrl.push(`window.__SCMAPI__ = '${process.env.SCMAPI}'`);
    process.env.RPTAPI && apiUrl.push(`window.__RPTAPI__ = '${process.env.RPTAPI}'`);
    process.env.IIRAPI && apiUrl.push(`window.__IIRAPI__ = '${process.env.IIRAPI}'`);
    process.env.GFCAPI && apiUrl.push(`window.__GFCAPI__ = '${process.env.GFCAPI}'`);
    process.env.GRPAPI && apiUrl.push(`window.__GRPAPI__ = '${process.env.GRPAPI}'`);
    process.env.CMSAPI && apiUrl.push(`window.__CMSAPI__ = '${process.env.CMSAPI}'`);
    process.env.LOGAPI && apiUrl.push(`window.__LOGAPI__ = '${process.env.LOGAPI}'`);
    process.env.SOCKETAPI && apiUrl.push(`window.__SOCKETAPI__ = '${process.env.SOCKETAPI}'`);
    process.env.SOCKETNAMESPACE && apiUrl.push(`window.__SOCKETNAMESPACE__ = '${process.env.SOCKETNAMESPACE}'`)


    const apiInit = apiUrl.join(';');
    await ctx.render(process.env.INDEXFILE || 'index', { apiInit });
  })

  app.use(route.routes());
}