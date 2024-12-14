import React, { useState } from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registering with:', { username, email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 text-white">
      <div className="flex w-full max-w-5xl bg-slate-900 p-8 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
          <form className='w-full' onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <FaUserAlt className="text-gray-500 ml-2" />
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-2 mt-2 focus:outline-none bg-slate-800 text-white placeholder-gray-400"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Choose a username"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <FaEnvelope className="ml-2" />
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 focus:outline-none bg-slate-800 text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <FaLock className="" />
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 mt-2 focus:outline-none bg-slate-800 text-white placeholder-gray-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Create a password"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">Confirm Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <FaLock className="ml-2" />
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 mt-2 focus:outline-none bg-slate-800 text-white placeholder-gray-400"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            <button className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google Logo" className="inline-block w-5 h-5 mr-2" />
              Register with Google
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-700">
              Login here
            </a>
          </p>
        </div>

        {/* Image section */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://via.placeholder.com/500x500?text=Real+Life+Register+Image"
            alt="Register Illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
