import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  removePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    Default_PostList
  );

  const addPost = () => {};

  const removePost = () => {};

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
    date: "2023-10-01",
    likes: 10,
    tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    title: "Post 2",
    user: "Jane Smith",
    content: "This is another post",
    date: "2023-10-02",
    likes: 20,
    tags: ["tag3", "tag4"],
  },
];

export default PostListProvider;
