import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
import { DUMMY_POSTS } from '../data';

const EditPost = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const history = useHistory();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    // Find the post based on the postId
    const foundPost = DUMMY_POSTS.find((post) => post.id === parseInt(postId));
    if (foundPost) {
      setPost(foundPost);
      setTitle(foundPost.title);
      setDescription(foundPost.description);
      setCategory(foundPost.category);
      setImage(foundPost.avatar);
    }
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the post logic (e.g., update DUMMY_POSTS or make an API call)
    console.log({ title, description, category, image });
    // Redirect back to dashboard or post list after submission
    history.push('/dashboard');
  };

  if (!post) return <div>Post not found!</div>;

  return (
    <section className="max-w-2xl mx-auto p-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Edit Post</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            placeholder="Enter post description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            {/* You can map categories here as before */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditPost;
