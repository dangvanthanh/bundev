import { edenTreaty } from '@elysiajs/eden';
import type { App } from './server';

const app = edenTreaty<App>('http://localhost:8080');

const { data: id, error } = app.id['1990'].get();

console.log(id, error);
