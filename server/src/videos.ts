import * as Router from 'koa-router';
import { copyFileSync } from 'fs';
const koaBody = require('koa-body')({multipart: true, uploadDir: '.'})

const router = new Router({
  prefix: '/videos'
});

const videos = [
  {
    imgUrl: 'https://umirzakov.site/static/ca11129044836553776d1bbd59807b73/empty_city.jpg',
    webmUrl: 'https://umirzakov.site/static/cbd021cd0c0101b25eaa3f58d9b924a2/empty_city.webm',
    title: "titel"
  },

  {
    imgUrl: 'https://umirzakov.site/static/b4761178b1cfdecba17a16e1cab13c3a/adrenaline_call.jpg',
    webmUrl: 'https://umirzakov.site/static/68f76c3f03d587e39c770bfe81efc168/adrenaline_call.webm',
    title: "titel"
  },
  {
    imgUrl: 'https://umirzakov.site/static/bab2efbbb209e08e6ecde8a7f64a813f/Weakspot.jpg',
    webmUrl: 'https://umirzakov.site/static/907c11759ef124ee134b3f53eefe749f/Weakspot.webm',
    title: "titel"
  }
]

router.get('/', (ctx, next) => {
  ctx.body = videos;
  next();
});

router.post('/new', koaBody, (ctx, next) => {

  const file = ctx.request.files.file
  
  copyFileSync(file.path, `server/public/videos/${file.name}`)
  ctx.body = "Success"

	next();
})


export default router