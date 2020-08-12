const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

// 管理静态资源
app.use(serve(__dirname))

const fs = require('fs');

app.use(async (ctx, next) => {
    ctx.type = 'text/html';
    // 渲染主页面
    ctx.body = fs.createReadStream('./index.html');
});

app.listen(8000);