import Sidebar from '@components/Sidebar';
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';

export default function GenerateIdea() {
  return (
    <div className="bg-secondary-light flex min-h-screen">
      <Sidebar />
      <main className="mt-10 flex flex-1 flex-col p-5 md:ml-10">
        <h1 className="text-secondary mb-6 text-left text-3xl font-bold md:ml-10">
          Generate Ideas
        </h1>

        {/* Main Content Box */}
        <div className="text-primary flex justify-center">
          <div className="w-full max-w-3xl rounded-lg bg-white p-10 text-center shadow-lg">
            <div className="mb-6 flex flex-col items-center">
              <DocumentDuplicateIcon className="mb-4 h-12 w-12" />
              <p className="text-lg font-bold">
                Please wait while we are fetching your blog posts....
              </p>
            </div>
            <p className="text-primary-dark text-sm">
              This may take a few seconds.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
