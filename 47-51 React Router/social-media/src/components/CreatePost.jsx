import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post-form">
      <h2 className="text-center">Create a New Post</h2>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          required
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter your user ID..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <textarea
          className="form-control"
          id="content"
          name="body"
          rows="3"
          placeholder="Write your post content here..."
          style={{ resize: "none" }}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          name="reactions"
          id="reactions"
          placeholder="How many people reacted to your post..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          name="tags"
          id="tags"
          placeholder="Please enter your hashtags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
