import { buchta } from 'buchta-elysia-integration';
import { Elysia, t } from 'elysia';
import { cors } from '@elysiajs/cors';
import cron from '@elysiajs/cron';
import { article } from './modules';

const app = new Elysia();

app
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
})).use(article)