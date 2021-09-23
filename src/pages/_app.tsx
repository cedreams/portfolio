import "../styles/global.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: any) {
    return (
        <div>
            <Head>
            <title>Cédric Thonus — Junior software developer</title>
            <meta name="application-name" content="Cédric Thonus" />
            <meta name="author" content="Cédric Thonus" />
            <meta name="description" content="Cédric Thonus — Junior software developer" />
            <meta name="keywords" content="développeur,developer,web developer,développeur web,bruxelles,brussels,belgique,belgium,cédric thonus,cedric thonus,thonus cedric,thonus cédric" />
		    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}