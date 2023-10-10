import { getSortedPostsData } from "../lib/posts";
import Home from "./home-page";

export default function Page() {
  const allPosts = getSortedPostsData();

  return <Home allPostsData={allPosts} />;
}
