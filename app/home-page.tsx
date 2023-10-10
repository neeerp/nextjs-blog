"use client";

import Head from "next/head";
import Link from "next/link";

import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey there, I&apos;m David! I&apos;m a full time Software Engineer 💻
          and hobbyist Squirrel Tamer 🐿️!When I&apos;m not writing code or busy
          raising an army of squirrels, I&apos;m probably losing track of time
          exploring a rabbithole of vim configurations.
        </p>
        <p>
          Anyhow, I&apos;ve built this nifty personal site by following the{" "}
          <a href="https://nextjs.org/learn"> Next.js tutorial </a>! Feel free
          to take a look around, and perhaps check out one of my posts below!
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}> Blog </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}> {title} </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
