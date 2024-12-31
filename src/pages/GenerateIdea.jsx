import Sidebar from '../components/Sidebar';

export default function GenerateIdea() {
  return (
    <div className="flex min-h-screen bg-secondary-light">
      <Sidebar />
      <main className="mt-10 flex-1 p-5 md:ml-10">
        <h1 className="mb-6 text-left text-3xl font-bold text-primary-dark">
          Generate Ideas
        </h1>

        {/* Main Content Box */}
        <div>
          <div className="w-full max-w-3xl rounded-lg bg-white p-10 text-center shadow-lg">
            <div className="mb-6 text-primary-dark">
              <i className="fa-solid fa-file-import mb-4 text-6xl hover:text-primary-light"></i>
              <p className="text-lg font-bold text-primary-dark">
                Please wait while we are fetching your blog posts....
              </p>
            </div>
            <p className="text-sm text-primary-dark">
              This may take a few seconds.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
