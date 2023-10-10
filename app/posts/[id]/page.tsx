import { getAllPostIds, getPostData } from "../../../lib/posts";
import Post from "./post";

export function generateStaticParams() {
  return getAllPostIds();
}

export default async function Page({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return <Post postData={postData} />;
}
