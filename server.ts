import { buchta } from 'buchta-elysia-integration';
import { Elysia, t } from 'elysia';
import { cors } from '@elysiajs/cors';
import cron from '@elysiajs/cron';

const app = new Elysia();

app
  .get('/article', () => 'From Get')
  .post('/article', () => 'From Post')
  .put('/article', () => 'From Put')
  .patch('/article', () => 'From Patch')
  .delete('/article', () => 'From Delete')
  .options('/article', () => 'From Options')
  .head('/article', () => 'From Head')
  .trace('/article', () => 'From Trace')
  .connect('/article', () => 'From Connect')
  // Custom method should be all uppercased
  .route('GET', '/search', () => 'From Custom Method!!!')
  // Group
  .group('/user', (app) =>
    app.get('/login', () => 'From Login').get('/signup', () => 'From Signup'),
  )
  // File upload
  .post('/upload', ({ body: { file } }) => file, {
    body: t.Object({
      file: t.File(),
    }),
  });

app.use(buchta).use(cors()).use(cron({
  name: 'heartbeat',
  pattern: '*/10 * * * * *', // second minute hour dayOfMonth month dayofWeek
  run() {
    console.log('Heartbeat')
  }
}))
