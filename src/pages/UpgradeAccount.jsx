import Sidebar from '../components/Sidebar';

export default function UpgradeAccount() {
  return (
    <div className="flex min-h-screen bg-secondary-light">
      <Sidebar />
      <main className="flex-1 p-5 md:ml-10">
        <h1 className="mb-6 text-left text-3xl font-bold text-primary-dark">
          Choose a plan to get started
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, colIndex) => (
            <div
              key={colIndex}
              className={`relative flex flex-col rounded-lg bg-primary-light p-4 shadow-md ${
                colIndex === 1 ? 'border-2 border-primary-dark' : ''
              }`}
            >
              {colIndex === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full border-2 border-primary-dark bg-white px-4 py-1 text-xs font-bold text-primary-dark shadow">
                  Recommended
                </div>
              )}

              <div className="rounded-lg bg-secondary-light p-6">
                <button className="mb-2 rounded-full bg-secondary-dark px-4 py-1 text-sm font-bold text-primary-dark hover:bg-primary-dark hover:text-secondary-dark">
                  {colIndex === 0
                    ? 'Free'
                    : colIndex === 1
                      ? 'Pro'
                      : 'Enterprise'}
                </button>
                <p className="mb-2 text-sm font-bold text-primary-dark">
                  {colIndex === 0
                    ? 'Suitable for trying out GPTSEO'
                    : colIndex === 1
                      ? 'Great for small projects'
                      : 'Best for large-scale businesses'}
                </p>
                <p className="text-2xl font-bold text-primary-dark">
                  {colIndex === 0 ? '$0' : colIndex === 1 ? '$49' : '$99'}
                </p>
                <p className="mb-4 text-sm text-gray-500">per month</p>
                <button
                  className={`rounded-xl border-2 px-4 py-2 text-sm font-bold ${
                    colIndex === 0
                      ? 'border-primary-dark bg-secondary-light text-primary-dark'
                      : 'border-primary-dark bg-primary-dark text-white hover:bg-primary-light hover:text-secondary-dark'
                  }`}
                >
                  {colIndex === 0 ? 'Current Plan' : 'Choose Plan'}
                </button>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <p className="text-sm font-bold text-primary-dark">
                    Features
                  </p>
                  <div className="ml-2 h-px flex-1 bg-graytext"></div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-primary-dark">
                  <li className="flex items-start">
                    <i className="fas fa-check mr-2 text-green-500"></i>
                    Feature 1: Basic tools for optimization
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check mr-2 text-green-500"></i>
                    Feature 2: Limited GPTSEO credits
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check mr-2 text-green-500"></i>
                    Feature 3: Email support
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check mr-2 text-green-500"></i>
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
