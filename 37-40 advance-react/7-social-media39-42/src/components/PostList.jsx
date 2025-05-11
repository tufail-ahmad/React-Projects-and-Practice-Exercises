import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import NoPostMsg from "./NoPostMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  // State to manage the loading state

  useEffect(() => {
    setFetching(true);
    // Set loading state to true when fetching data
    const abortController = new AbortController();
    // Create an abort controller to cancel the fetch request if needed
    const signal = abortController.signal;
    // Get the signal from the abort controller
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
        // Set loading state to false after data is fetched
      });
    return () => {
      abortController.abort();
      // Abort the fetch request if the component unmounts
    };
  }, []);
  // Fetch posts from the API when the component mounts

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <NoPostMsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
