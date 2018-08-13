module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    }
    // 释放error事件
    ctx.app.emit('error', err, ctx);
  }
}