const Post = ({ post }) => {
  return (
    <>
      <span className="position-relative badge rounded-pill bg-danger kgBage">
        {post.likes}
      </span>{" "}
      <div className="card post" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title Title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          {post.tags.map((tag, index) => (
            <span key={index} className="badge text-bg-primary me-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
