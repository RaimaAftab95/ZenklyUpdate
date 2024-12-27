import PropTypes from 'prop-types';
import SocialSignupButtons from './SocialSignupButtons';

export default function SignupForm({ formData, handleChange, handleSubmit }) {
  return (
    <div className="w-full max-w-sm flex-1 rounded-lg bg-white p-8 shadow-lg">
      <h2 className="darkbrown-text mb-6 text-center text-xl font-semibold">
        Sign Up
      </h2>
      <h6 className="text-center text-sm">Time to automate your SEO with AI</h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-5">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-xs"
            placeholder="Password"
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
            <a href="/terms" className="darkbrown-text text-xs hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy-policy"
              className="text-darkbrown-text text-xs hover:underline"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-darkbrown py-2 text-xs text-white hover:bg-darkestbrown"
          disabled={!formData.agreedToTerms}
        >
          Sign Up
        </button>

        <div className="mt-6">
          <SocialSignupButtons />
        </div>
      </form>
    </div>
  );
}

// Define propTypes for validation
SignupForm.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    agreedToTerms: PropTypes.bool.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
