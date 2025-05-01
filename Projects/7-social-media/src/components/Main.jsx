import CreatePost from "./CreatePost";
import PostList from "./PostList";

const Main = ({ selectedTab }) => {
  return (
    <main className="main">
      {selectedTab === "home" ? (
        <PostList></PostList>
      ) : (
        <CreatePost></CreatePost>
      )}
    </main>
  );
};

export default Main;
