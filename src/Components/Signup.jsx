import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onSignInClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, remember });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="w-full max-w-md p-8 rounded-xl shadow-md ml-0 border border-gray-700 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-1">Welcome!</h2>
        <p className="mb-6 text-gray-400">
          Use these awesome forms to login or create new account in your project for free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
              required
            />
          </div>

         
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2  border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
              required
            />
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setRemember(!remember)}
              className={`mr-2 w-10 h-5 rounded-full transition-colors duration-300 flex items-center ${remember ? 'bg-blue-600' : 'bg-gray-700'}`}
            >
              <span
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 transform ${remember ? 'translate-x-5' : 'translate-x-1'}`}
              />
            </button>
            <label className="text-sm cursor-pointer">Remember me</label>
          </div>

        
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition h-12"
          >
            SIGN UP
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-400">
          Already have an account?{' '}
          <a
            href="#"
            onClick={onSignInClick}
            className="text-white font-medium hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
