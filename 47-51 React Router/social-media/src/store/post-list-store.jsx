import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
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

  return (
    <PostList.Provider value={{ postList, addPost, removePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
