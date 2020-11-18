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
    </Head>

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
