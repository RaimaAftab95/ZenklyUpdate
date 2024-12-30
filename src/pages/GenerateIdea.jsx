import Sidebar from '../components/Sidebar';

export default function GenerateIdea() {
  return (
    <div className="flex min-h-screen bg-lightbg">
      <Sidebar />
      <main className="mt-10 flex-1 p-5 md:ml-10">
        <h1 className="text-darkshade mb-6 text-left text-3xl font-bold">
          Generate Ideas
        </h1>

        {/* Main Content Box */}
        <div>
          <div className="w-full max-w-3xl rounded-lg bg-white p-10 text-center shadow-lg">
            <div className="text-darkshade mb-6">
              <i className="fa-solid fa-file-import mb-4 text-6xl hover:text-darkbg"></i>
              <p className="text-darkshade text-lg font-bold">
                Please wait while we are fetching your blog posts....
              </p>
            </div>
            <p className="text-darkshade text-sm">
              This may take a few seconds.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
