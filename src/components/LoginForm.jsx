import PropTypes from 'prop-types';
import SocialSignupButtons from './SocialSignupButtons';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import toast from 'react-hot-toast';

export default function LoginForm({ formData, handleChange }) {
  const { email, password } = formData;
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  /**
   * Handle form submission
   * @param {import('react').SyntheticEvent} e Event object
   * @returns {void}
   */
  async function handleFormSubmit(e) {
    e.preventDefault();

    await toast.promise(login({ email, password }), {
      loading: 'Loading...',
      success: 'Login successful!',
      error: 'Login failed. Please try again!'
    });

    navigate('/create-project');
  }

  return (
    <div className="w-full max-w-sm flex-1 rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-xl font-semibold text-primary hover:text-primary-dark">
        Login
      </h2>
      <h6 className="text-center text-sm">Time to automate your SEO with AI</h6>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4 mt-5">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-xs"
            placeholder="Email"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password || ''}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-xs"
            placeholder="Password must NOT have fewer than 8 characters"
          />
        </div>

        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="agreedToTerms"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="mr-2 text-xs"
          />
          <label htmlFor="agreedToTerms" className="text-xs text-gray-700">
            I agree to the{' '}
            <a
              href="/terms"
              className="text-xs text-primary hover:text-primary-dark hover:underline"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy-policy"
              className="text-xs text-primary hover:text-primary-dark hover:underline"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="hover:bg-darkestbrown w-full rounded-md bg-primary py-2 text-xs text-white hover:bg-primary-dark"
          disabled={!formData.agreedToTerms}
        >
          {isLoading ? 'Loging In...' : 'Login'}
        </button>

        {/* Error Message */}
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

        <div className="mt-6">
          <SocialSignupButtons />
        </div>
      </form>
    </div>
  );
}

// Define propTypes for validation
LoginForm.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    agreedToTerms: PropTypes.bool.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
