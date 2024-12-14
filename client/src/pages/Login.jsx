import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 text-white">
      <div className="flex w-full max-w-5xl bg-slate-900 p-8 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form className='w-full' onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <FaUserAlt className="text-gray-500 ml-2" />
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
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <FaLock className="text-gray-500 ml-2" />
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 mt-2 focus:outline-none bg-slate-800 text-white placeholder-gray-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <button className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google Logo" className="inline-block w-5 h-5 mr-2" />
              Login with Google
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-600 hover:text-blue-700">
              Register here
            </a>
          </p>
        </div>

        {/* Image section */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://via.placeholder.com/500x500?text=Real+Life+Login+Image"
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
