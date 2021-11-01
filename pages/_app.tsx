import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout/Layout";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Head>
          <title>Mohamed Kachtit | Développeur web</title>
          <meta name="title" content="Mohamed Kachtit | Développeur web" />
          <meta
            name="description"
            content="Mohamed Kachtit est un développeur web sur amiens, détenteur d'un titre professionel de concepteur d'application "
          />
          <meta
            name="keywords"
            content="Mohamed Kachtit, Software Developer , Web Development Freelancer, Développement web, Web Developer, Développement mobile, Freelance amiens"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="French" />
          <meta name="revisit-after" content="10 days" />
          <meta name="author" content="Mohamed Kachtit" />
          <meta name="copyright" content="tout droit réservé,2021. Mohamed Kachtit" />
          <meta httpEquiv="content-language" content="fr" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://modevoc.fr/" />
          <meta property="og:title" content="Mohamed Kachtit | Développeur web" />
          <meta
            property="og:description"
            content="Mohamed Kachtit est un développeur web sur amiens, détenteur d'un titre professionel de concepteur d'application"
          />
          <meta
            property="og:image"
            content="https://billboard.srmkzilla.net/api/blog?title=Mohamed%20Kachtit&subtitle=D%C3%A9veloppeur%20Web&fileType=jpeg&theme=dark&fontSize=180px"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://modevoc.fr/" />
          <meta property="twitter:site" content="@harshgoel05" />
          <meta property="twitter:title" content="Mohamed Kachtit | Développeur web" />
          <meta
            property="twitter:description"
            content="Mohamed Kachtit est un développeur web sur amiens, détenteur d'un titre professionel de concepteur d'application"
          />
          <meta
            property="twitter:image"
            content="https://billboard.srmkzilla.net/api/blog?title=Mohamed%20Kachtit&subtitle=D%C3%A9veloppeur%20Web&fileType=jpeg&theme=dark&fontSize=180px"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/svg" sizes="32x32" href="/favicon-32x32.svg" />
          <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.svg" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/*Hotjar Tracking Code for https://www.modevoc.fr/*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2679086,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
            }}
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}

export default MyApp
