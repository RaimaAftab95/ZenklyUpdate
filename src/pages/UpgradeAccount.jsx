import Sidebar from '@components/Sidebar';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function UpgradeAccount() {
  return (
    <div className="bg-secondary-light flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-5 md:ml-10">
        <h1 className="text-primary-dark mb-6 text-left text-3xl font-bold">
          Choose a plan to get started
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, colIndex) => (
            <div
              key={colIndex}
              className={`bg-primary-light relative flex flex-col rounded-lg p-4 shadow-md ${
                colIndex === 1 ? 'border-primary-dark border-2' : ''
              }`}
            >
              {colIndex === 1 && (
                <div className="border-primary-dark text-primary-dark absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full border-2 bg-white px-4 py-1 text-xs font-bold shadow-sm">
                  Recommended
                </div>
              )}

              <div className="bg-secondary-light rounded-lg p-6">
                <button className="bg-secondary-dark text-primary-dark hover:bg-primary-dark hover:text-secondary-dark mb-2 rounded-full px-4 py-1 text-sm font-bold">
                  {colIndex === 0
                    ? 'Free'
                    : colIndex === 1
                      ? 'Pro'
                      : 'Enterprise'}
                </button>
                <p className="text-primary-dark mb-2 text-sm font-bold">
                  {colIndex === 0
                    ? 'Suitable for trying out GPTSEO'
                    : colIndex === 1
                      ? 'Great for small projects'
                      : 'Best for large-scale businesses'}
                </p>
                <p className="text-primary-dark text-2xl font-bold">
                  {colIndex === 0 ? '$0' : colIndex === 1 ? '$49' : '$99'}
                </p>
                <p className="mb-4 text-sm text-gray-500">per month</p>
                <button
                  className={`rounded-xl border-2 px-4 py-2 text-sm font-bold ${
                    colIndex === 0
                      ? 'border-primary-dark bg-secondary-light text-primary-dark'
                      : 'border-primary-dark bg-primary-dark hover:bg-primary-light hover:text-secondary-dark text-white'
                  }`}
                >
                  {colIndex === 0 ? 'Current Plan' : 'Choose Plan'}
                </button>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <p className="text-primary-dark text-sm font-bold">
                    Features
                  </p>
                  <div className="bg-graytext ml-2 h-px flex-1"></div>
                </div>
                <ul className="text-primary mt-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-green-500" />
                    Feature 1: Basic tools for optimization
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-green-500" />
                    Feature 2: Limited GPTSEO credits
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-green-500" />
                    Feature 3: Email support
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-green-500" />
                    Feature 4: Community access
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
