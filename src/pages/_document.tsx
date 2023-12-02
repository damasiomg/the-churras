import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,500;0,700;0,800;1,100&display=swap" rel="stylesheet" />
                <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>

    )
}