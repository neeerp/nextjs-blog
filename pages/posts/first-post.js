import Head from "next/head";
import Image from "next/image";

import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <ProfilePic />
      <h1>First Post</h1>
    </Layout>
  );
}

const ProfilePic = () => (
  <Image src="/images/profile.jpg" height={144} width={144} alt="David" />
);
