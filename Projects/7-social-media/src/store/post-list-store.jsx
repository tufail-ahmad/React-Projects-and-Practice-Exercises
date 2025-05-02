import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  removePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "REMOVE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    Default_PostList
  );

  const addPost = (userId, title, content, reactions, tags) => {
    const newPost = {
      id: Math.floor(Math.random() * 1000),
      userId,
      title,
      content,
      reactions,
      tags,
    };
    dispatchPostList({ type: "ADD_POST", payload: newPost });
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

const Default_PostList = [
  {
    id: 1,
    title: "Post 1",
    user: "John Doe",
    content: "This is a post",
    reactions: 10,
    tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    title: "Post 2",
    user: "Jane Smith",
    content: "This is another post",
    reactions: 20,
    tags: ["tag3", "tag4"],
  },
  {
    id: 3,
    title: "Post 3",
    user: "Alice Johnson",
    content: "This is yet another post",
    reactions: 30,
    tags: ["tag5", "tag6"],
  },
];

export default PostListProvider;
