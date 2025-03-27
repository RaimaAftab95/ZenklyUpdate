import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowPathIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function CreateProject() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(step + 1);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="mb-6 flex w-full justify-start">
        <img src="/images/logo.png" alt="Logo" className="h-7 w-7" />
        <span className="text-primary text-2xl font-bold">Zenkly</span>
      </div>

      <h1 className="text-secondary mb-6 text-4xl font-bold">Create Project</h1>
      <p className="text-secondary mb-6 text-lg leading-6">
        Connect your blog to get started
      </p>

      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-lg">
        {step === 1 && (
          <>
            <p className="mb-2 text-sm font-medium text-gray-500">
              Choose your blog platform
            </p>
            <div className="mb-6 flex gap-2 sm:gap-3">
              <div className="flex w-full items-center gap-0.5 rounded-xl border border-gray-300 sm:gap-2">
                <img
                  src="/images/wordpress-logo.png"
                  alt="WordPress"
                  className="h-16 w-10 object-contain sm:w-16"
                />
                <span className="text-sm leading-5 font-medium text-gray-600 sm:text-base">
                  WordPress
                </span>
              </div>
              <div className="flex w-full items-center gap-0.5 rounded-xl border border-gray-300 sm:gap-2">
                <img
                  src="/images/wordpress-logo.png"
                  alt="WordPress"
                  className="h-16 w-10 object-contain sm:w-16"
                />
                <span className="text-sm leading-5 font-medium text-gray-600 sm:text-base">
                  WordPress
                </span>
              </div>
            </div>

            <p className="mb-2 text-sm font-medium text-gray-500">
              Type your blog URL
            </p>
            <input
              type="text"
              placeholder="Enter your blog URL"
              className="mb-6 w-full rounded-lg border border-gray-300 p-3 text-sm font-medium text-gray-500"
            />

            <div className="flex justify-between">
              <button
                onClick={handleNext}
                disabled={loading}
                type="button"
                className="bg-secondary hover:bg-primary rounded-lg px-4 py-2 leading-5 font-medium text-white"
              >
                {loading ? (
                  <>
                    <ArrowPathIcon className="mr-2 inline-block h-5 w-5 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  'Connect Blog'
                )}
              </button>
              <button
                type="submit"
                className="bg-secondary hover:bg-primary rounded-lg px-4 py-2 leading-5 font-medium text-white"
              >
                Skip
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="flex flex-col items-center text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckIcon className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-2 text-2xl font-bold">Blog Connected!</h2>
            <p className="mb-8 text-gray-600">
              Your blog has been successfully connected. You can now start
              generating ideas.
            </p>
            <NavLink
              to="/generate-idea-choose-blogs"
              className="bg-secondary hover:bg-primary inline-block w-full rounded-lg py-3 text-white"
            >
              Go to Dashboard
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
