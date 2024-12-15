import React, { useState } from 'react';
import { DUMMY_POSTS } from '../data';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <article className="p-4 border rounded-lg shadow-md bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex items-center gap-4">
        <img
          src={post.avatar}
          alt={post.title}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-500">{post.description}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Link
          to={`posts/${post.id}`}
          className="text-blue-600 hover:underline hover:text-blue-800"
        >
          View
        </Link>
        <Link
          to={`/posts/${post.id}/edit`}
          className="text-green-600 hover:underline hover:text-green-800"
        >
          Edit
        </Link>
        <Link
          to={`/posts/${post.id}/delete`}
          className="text-red-600 hover:underline hover:text-red-800"
        >
          Delete
        </Link>
      </div>
    </article>
  );
};

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="p-6">
      {posts.length ? (
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-xl font-semibold text-gray-500">
          No posts yet...!
        </h2>
      )}
    </section>
  );
};

export default Dashboard;
