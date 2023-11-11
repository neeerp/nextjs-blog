"use client";

import Head from "next/head";
import Link from "next/link";

import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";

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
      <section className="text-xl/tight">
        <p className="my-5">
          Hey there, I&apos;m David! I&apos;m a full time Software Engineer 💻
          and hobbyist Squirrel Tamer 🐿️!When I&apos;m not writing code or busy
          raising an army of squirrels, I&apos;m probably losing track of time
          exploring a rabbithole of vim configurations.
        </p>
        <p className="my-5">
          Anyhow, I&apos;ve built this nifty personal site by following the{" "}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>! Feel free to
          take a look around, and perhaps check out one of my posts below!
        </p>
      </section>

      <section className="text-xl/tight pt-px">
        <h2 className="text-2xl/snug font-bold my-4"> Blog </h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              {/**<li className={utilStyles.listItem} key={id}>**/}
              <Link href={`/posts/${id}`}> {title} </Link>
              <br />
              <small className="text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
