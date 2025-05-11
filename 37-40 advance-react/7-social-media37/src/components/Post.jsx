import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { removePost } = useContext(PostList);
  return (
    <>
      <span
        className="position-relative badge rounded-pill bg-danger kgBage"
        onClick={() => removePost(post.id)}
      >
        <MdDelete />
      </span>
      <div className="card post" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title Title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag me-1">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This Post has been reacted by {post.reactions.likes} people.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
