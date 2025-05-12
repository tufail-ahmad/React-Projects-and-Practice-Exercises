import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import NoPostMsg from "./NoPostMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <NoPostMsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
