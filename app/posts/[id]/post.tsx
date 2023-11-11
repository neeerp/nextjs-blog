"use client";

import Head from "next/head";

import Date from "../../../components/date";
import Layout from "../../../components/layout";

import "./markdown.css";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-[2rem]/tight font-extrabold my-4 tracking-tight">
          {postData.title}
        </h1>
        <div className="text-gray-500">
          <Date dateString={postData.date} />
        </div>
        <div
          className="unreset"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}
