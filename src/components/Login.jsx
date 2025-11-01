import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../utils/storage';
import { PillIcon } from './Icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setCurrentUser(username.trim());
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-gradient-to-br from-primary to-primary-dark">
      <div className="bg-white p-12 rounded-2xl w-full max-w-[440px] transition-all border border-gray-200">
        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary flex items-center justify-center">
            <PillIcon size={32} color="white" />
          </div>
          <h1 className="m-0 text-[28px] font-bold text-gray-900 tracking-tight">
            Health Tracker
          </h1>
          <p className="mt-2 mb-0 text-[15px] text-gray-600">
            Sign in to manage your health data
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 font-semibold text-gray-900 text-sm">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] text-gray-900 bg-gray-50 transition-all outline-none focus:border-primary"
              placeholder="Enter your username"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white border-none rounded-lg text-base cursor-pointer font-semibold transition-all hover:bg-primary-dark"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
