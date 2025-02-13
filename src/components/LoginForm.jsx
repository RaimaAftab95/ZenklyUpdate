import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

import { useLogin } from '@hooks/useLogin';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  /**
   * Handle form submission
   * @param {import('react').SyntheticEvent} e Event object
   */
  async function handleFormSubmit(e) {
    e.preventDefault();

    await login({
      email: data.email,
      password: data.password
    });

    navigate('/create-project');
  }

  /**
   * Handle form changes
   * @param {import('react').SyntheticEvent} e Event object
   * @returns {void}
   */
  function handleChange(e) {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    });
  }

  return (
    <div className="rounded-box w-full max-w-sm bg-white px-8 py-20">
      <h2 className="mb-2 text-center text-xl font-bold">Login</h2>
      <h6 className="text-center text-sm">Time to automate your SEO with AI</h6>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-5 mb-4">
          <label className="input bg-white">
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </label>
        </div>

        <div className="mb-6">
          <label className="input relative bg-white">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
            <button
              type="button"
              onClick={function () {
                setShowPassword(!showPassword);
              }}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isLoading}
        >
          {isLoading && <span className="loading loading-spinner"></span>}
          {isLoading ? 'Logging In' : 'Login'}
        </button>

        {error && <p className="text-error mt-2 text-sm">{error}</p>}
      </form>
    </div>
  );
}
