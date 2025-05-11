import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import NoPostMsg from "./NoPostMsg";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handlePostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && <NoPostMsg onGetPosts={handlePostClick} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
