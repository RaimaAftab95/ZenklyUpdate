import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useRegister } from '@hooks/useRegister';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const { register, isLoading, error } = useRegister();
  const navigate = useNavigate();

  /**
   * Handle form submission
   * @param {import('react').SyntheticEvent} e Event object
   */
  async function handleFormSubmit(e) {
    e.preventDefault();

    await register({
      firstName: data.firstName,
      lastName: data.lastName,
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
      <h2 className="mb-2 text-center text-xl font-bold">Sign Up</h2>
      <h6 className="text-center text-sm">Time to automate your SEO with AI</h6>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-5 mb-4">
          <label className="input validator bg-white">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </label>
          <div className="validator-hint text-error-content hidden">
            Enter valid first name
          </div>
        </div>

        <div className="mb-4">
          <label className="input validator bg-white">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </label>
          <div className="validator-hint text-error-content hidden">
            Enter valid Last name
          </div>
        </div>
        <div className="mt-5 mb-4">
          <label className="input validator bg-white">
            <input
              type="email"
              id="email"
              name="email"
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

        <div className="mb-6">
          <label className="input validator relative bg-white">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
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
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </label>
          <p className="validator-hint text-error-content hidden">
            Must be more than 8 characters, including
            <br />
            At least one number
            <br />
            At least one lowercase letter
            <br />
            At least one uppercase letter
          </p>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isLoading}
        >
          {isLoading && <span className="loading loading-spinner"></span>}
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>

        {/* Error Message */}
        {error && <p className="text-error mt-2 text-sm">{error}</p>}

        <div className="mt-6"></div>
      </form>
    </div>
  );
}
