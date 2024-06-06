import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer';
import { Layout } from './layoutBeercss';

const app = new Hono()
app.get("*", jsxRenderer(Layout));
declare module "hono" {
  type ContextRenderer = (
    content: string | Promise<string>,
    properties: { title: string }
  ) => Response;
}
app.get('/', (c) => {
  return c.render('Hello Hono!', {title: 'abc'})
})

export default app
