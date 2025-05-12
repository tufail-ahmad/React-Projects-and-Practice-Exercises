import Post from "./Post";
import NoPostMsg from "./NoPostMsg";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <NoPostMsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
