import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey there, I'm David! I'm a full time Software Engineer 💻 and hobbyist Squirrel Tamer 🐿️!
          When I'm not writing code or busy raising an army of squirrels, I'm probably losing track of time exploring a rabbithole of vim configurations.
        </p>
        <p>
          Anyhow, I've built this nifty personal site by following the <a href="https://nextjs.org/learn">Next.js tutorial</a>!
          Feel free to take a look around, and perhaps check out this sample <Link href="/posts/first-post">Blog Post</Link>!
        </p>
      </section>
    </Layout>
  );
}
