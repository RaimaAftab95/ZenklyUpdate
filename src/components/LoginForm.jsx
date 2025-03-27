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
    <div className="flex items-center justify-center">
      <div className="rounded-box w-full max-w-md bg-white p-8 shadow-md sm:max-w-lg md:max-w-xl lg:w-144">
        <h2 className="mb-2 text-center text-4xl font-bold text-gray-700">
          Login
        </h2>
        <p className="mb-6 text-center font-medium text-gray-700">
          Time to automate your SEO with AI
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4 rounded-xl text-center">
            <label className="input validator rounded-xl bg-white">
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-xl p-3 text-gray-400"
                value={data.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </label>
            <div className="validator-hint text-error-content hidden">
              Enter valid email address
            </div>
          </div>

          <div className="mb-4 rounded-xl text-center">
            <label className="input validator relative rounded-xl bg-white">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="rounded-xl p-3 text-gray-400"
                value={data.password}
                onChange={handleChange}
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
              <button
                type="button"
                onClick={function () {
                  setShowPassword(!showPassword);
                }}
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer p-3"
              >
                {showPassword ? (
                  <EyeSlashIcon className="text-secondary h-5 w-5" />
                ) : (
                  <EyeIcon className="text-secondary h-5 w-5" />
                )}
              </button>
            </label>
            <p className="validator-hint text-error-content hidden text-center">
              Must be more than 8 characters, including
              <br />
              At least one number
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
            </p>
          </div>

          <div className="mb-4 text-center">
            <button
              type="submit"
              className="btn btn-primary w-4/5 rounded-xl bg-indigo-500 leading-5 sm:w-3/5"
              disabled={isLoading}
            >
              {isLoading && <span className="loading loading-spinner"></span>}
              {isLoading ? 'Logging In' : 'Login'}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-error mt-2 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
}
