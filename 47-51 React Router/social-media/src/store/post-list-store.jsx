import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  removePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "REMOVE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload);
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    const newPost = post;
    dispatchPostList({ type: "ADD_POST", payload: newPost });
  };

  const addInitialPosts = (posts) => {
    const newPost = {
      posts,
    };
    dispatchPostList({ type: "ADD_INITIAL_POST", payload: newPost });
  };

  const removePost = (postId) => {
    dispatchPostList({ type: "REMOVE_POST", payload: postId });
  };

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
    <PostList.Provider value={{ postList, addPost, fetching, removePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
