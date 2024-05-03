import type { FC } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'

export const Layout: FC = ({ children, title }) => {

    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <link rel="manifest" href="/static/manifest.json" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                <title>{title}</title>
            </head>
            <body >
                
                <main class="responsive" role='main'>
                    {children}
                </main>

            </body>
        </html>
    )
}