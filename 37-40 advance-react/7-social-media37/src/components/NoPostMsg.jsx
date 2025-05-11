const NoPostMsg = ({ onGetPosts }) => {
  return (
    <div className="no-post-msg">
      <h2>No posts available</h2>
      <p className="lead">
        It seems like there are no posts to display at the moment.
      </p>
      <button onClick={onGetPosts} type="button" className="btn btn-primary">
        Get Posts from Server
      </button>
    </div>
  );
};
export default NoPostMsg;
// This component is used to display a message when there are no posts available.
