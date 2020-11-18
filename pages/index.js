import Head from 'next/head'
import { NextSeo } from 'next-seo';
import MailForm from '../components/MailForm';

const Home = () => (
  <div className="container">
    <NextSeo
        title="Official Website Of Achraf El Ghinoussi | Achraf.org"
        description="Achraf El Ghinoussi, better known as Achraf, is a Moroccan Developer, Entrepreneur. Achraf.org also provide a list of tools, freebies, and courses."
        keywords="Achraf, Achraf El Ghinoussi, developer, web, self-employed, yonayn, blog, courses, free"
        author="Yonyayn - Achraf El Ghinoussi - http://dev.achraf.org"
      />
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/36615fd00beb84aa5c413348b/a33f19b55feb10e14dd8180d9.js");</script>    </Head>
    <MailForm />

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
