
import * as Koa from 'koa'

import * as koaBody from 'koa-body'

import { router } from './books'

export function run() {
  const app = new Koa();

  app.use(koaBody())
  // response
  app.use(router.routes())
    .use(router.allowedMethods());

  app.listen(3000);
}
