import PropTypes from 'prop-types';
import SocialSignupButtons from './SocialSignupButtons';

export default function SignupForm({ formData, handleChange, handleSubmit }) {
  return (
    <div className="w-full max-w-sm flex-1 rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-3xl font-semibold text-[#BA5914]">
        Sign Up
      </h2>
      <h6 className="text-center">Time to automate your SEO with AI</h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-5">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2"
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
            className="w-full rounded-md border border-gray-300 px-4 py-2"
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
            className="mr-2"
          />
          <label htmlFor="agreedToTerms" className="text-gray-700">
            I agree to the{' '}
            <a href="/terms" className="text-[#BA5914] hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy-policy"
              className="text-[#BA5914] hover:underline"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-[#BA5914] py-2 text-white hover:bg-[#9a4612]"
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
