import Sidebar from '@components/Sidebar';
import {
  TrashIcon,
  DocumentDuplicateIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid';

export default function SavedIdeas() {
  return (
    <div className="bg-secondary-light flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-5 md:ml-10">
        <h1 className="text-primary-dark mb-6 text-left text-3xl font-bold">
          Saved Ideas
        </h1>

        <div className="w-full max-w-4xl rounded-lg bg-white p-10 text-center shadow-lg">
          <div className="mb-8">
            <div className="flex flex-col text-left">
              <h2 className="mb-4 text-lg font-bold">
                Copy your favorite saved ideas to create posts
              </h2>
              <div className="space-y-6">
                {[...Array(4)].map((_, rowIndex) => (
                  <div key={rowIndex} className="flex space-x-6">
                    {[...Array(2)].map((_, colIndex) => (
                      <div
                        key={colIndex}
                        className="bg-secondary-light flex flex-col rounded-lg border border-gray-300 p-2 shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-primary-dark mt-2 mr-8 flex-1 text-sm font-bold">
                            How to build an effective email list from scratch
                          </p>
                          <div className="flex space-x-3">
                            <TrashIcon className="text-primary hover:text-secondary h-4 w-4 cursor-pointer" />
                            <DocumentDuplicateIcon className="text-primary hover:text-secondary h-4 w-4 cursor-pointer" />

                            <CheckCircleIcon className="text-primary hover:text-secondary h-4 w-4 cursor-pointer" />
                          </div>
                        </div>
                        <div className="text-right text-xs text-gray-500">
                          Aug 14, 2024
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
