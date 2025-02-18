import Sidebar from '@components/Sidebar';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function UpgradeAccount() {
  return (
    <div className="bg-secondary-light flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-secondary mb-6 text-4xl font-bold">
          Choose a plan to get started
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, colIndex) => (
            <div
              key={colIndex}
              className={`bg-base-100 relative flex flex-col rounded-lg p-4 shadow-md ${
                colIndex === 1 ? 'border-secondary border-2' : ''
              }`}
            >
              {colIndex === 1 && (
                <div className="bg-secondary absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full px-4 py-1 text-xs font-bold text-white shadow-sm">
                  Recommended
                </div>
              )}

              <div className="bg-base-200 rounded-lg p-6">
                <button
                  className="text-base-content mb-2 rounded-full px-4 py-1 text-base leading-tight font-bold"
                  style={{ background: 'var(--color-new-gradient)' }}
                >
                  {colIndex === 0
                    ? 'Free'
                    : colIndex === 1
                      ? 'Pro'
                      : 'Enterprise'}
                </button>
                <p className="text-secondary mb-2 text-sm leading-tight">
                  {colIndex === 0
                    ? 'Suitable for trying out Zenkly'
                    : colIndex === 1
                      ? 'Great for small projects'
                      : 'Best for large-scale businesses'}
                </p>
                <p className="text-secondary text-4xl leading-tight font-semibold">
                  {colIndex === 0 ? '$0' : colIndex === 1 ? '$49' : '$99'}
                </p>
                <p className="text-secondary mb-4 text-xs leading-5 font-medium">
                  per month
                </p>
                <button
                  className={`w-full rounded-xl px-4 py-2 text-sm leading-4 font-medium ${
                    colIndex === 0
                      ? 'border-secondary text-secondary border'
                      : 'bg-secondary text-white'
                  }`}
                >
                  {colIndex === 0 ? 'Current Plan' : 'Choose Plan'}
                </button>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <p className="text-secondary text-sm leading-4 font-semibold">
                    Features
                  </p>
                  <div
                    className="ml-2 h-px flex-1"
                    style={{ backgroundColor: 'var(--color-base-400)' }}
                  ></div>
                </div>
                <ul className="text-base-content mt-4 space-y-2 text-sm leading-5">
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 h-4 w-4" />
                    Basic tools for optimization
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 h-4 w-4" />
                    Limited GPTSEO credits
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 h-4 w-4" />
                    Email support
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 h-4 w-4" />
                    Community access
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
