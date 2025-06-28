import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showSignup, setShowSignup] = useState(false); // New state for showing signup
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
    // For demonstration, navigate to dashboard directly after logging
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-wrap min-h-screen text-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 p-4 pr-0 flex items-center justify-center">
        <img
          src="/src/assets/Image.png"
          alt="Login Visual"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-4 pl-[80px] flex items-center justify-start">
        {showSignup ? (
          <Signup onSignInClick={() => setShowSignup(false)} />
        ) : (
          <div className="w-full max-w-md p-8 rounded-xl shadow-md ml-0">
            <h2 className="text-2xl font-bold mb-1">Nice to see you!</h2>
            <p className="mb-6 text-gray-400">Enter your email and password to sign in</p>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
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
                  className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
                  required
                />
              </div>

              <div className="flex items-center">
                <button
                  type="button"
                  id="remember"
                  onClick={() => setRemember(!remember)}
                  className={`mr-2 w-10 h-5 rounded-full transition-colors duration-300 flex items-center ${remember ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                  <span
                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 transform ${remember ? 'translate-x-5' : 'translate-x-1'}`}
                  />
                </button>
                <label htmlFor="remember" className="text-sm cursor-pointer">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition h-12"
              >
                SIGN IN
              </button>
            </form>

            <p className="text-sm text-center mt-6 text-gray-400">
              Don’t have an account?{' '}
              <a
                href="#"
                onClick={() => setShowSignup(true)}
                className="text-white font-medium hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
