import { Elysia } from 'elysia'

export const article = (app: Elysia) => {
    app.get('/article', () => 'From Get')
    .post('/article', () => 'From Post')
    .put('/article', () => 'From Put')
    .patch('/article', () => 'From Patch')
    .delete('/article', () => 'From Delete')
    .options('/article', () => 'From Options')
    .head('/article', () => 'From Head')
    .trace('/article', () => 'From Trace')
    .connect('/article', () => 'From Connect')
}