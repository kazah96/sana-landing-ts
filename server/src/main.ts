
import * as Koa from 'koa'

import * as koaBody from 'koa-body'

import bookRouter from './books'
import videoRouter from './videos'

export function run() {
  const app = new Koa();

  app.use(koaBody())
  // response

  app.use(bookRouter.routes())
    .use(videoRouter.routes())

  app.listen(3000);
}
