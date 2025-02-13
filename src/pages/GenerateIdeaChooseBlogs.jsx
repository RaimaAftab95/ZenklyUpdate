import Sidebar from '@components/Sidebar';
import GetGeneralSuggestions from '@components/GetGeneralSuggestions';
import { BookmarkIcon, SparklesIcon } from '@heroicons/react/24/solid';

export default function GenerateIdeaChooseBlogs() {
  return (
    <div className="bg-secondary-light flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-5 md:ml-10">
        <h1 className="text-secondary mb-2 text-left text-3xl font-bold">
          Generate Ideas
        </h1>

        {/* Main Content Box */}
        <div className="w-full max-w-4xl rounded-lg bg-white p-10 text-center shadow-lg">
          <div className="mb-8">
            {/* Container for Both Columns */}
            <div className="mb-8 flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
              <div className="flex-[0.4] text-left">
                <h2 className="text-lg font-bold">Choose Blogs</h2>
                <p className="text-sm">
                  Pick a few blogs to use as inspirations
                </p>

                <div className="mt-6 space-y-6">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-300 bg-white p-4 shadow-md"
                    >
                      <p className="text-sm font-semibold">
                        How to build an effective email list from scratch
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <input type="radio" name="blog" />
                        <span className="text-sm text-gray-500">Date</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden border-l border-gray-300 md:block"></div>

              <div className="flex-[0.6] text-left">
                <h2 className="text-lg font-bold">Focus Keyword</h2>
                <p className="text-sm">
                  Let AI generate on something specific (optional)
                </p>

                <div className="my-6">
                  <input
                    type="text"
                    placeholder="Email marketing"
                    className="focus:border-primary w-full rounded-lg border border-gray-300 p-3 focus:outline-hidden"
                  />
                </div>

                <div className="bg-primary hover:bg-secondary-light hover:text-primary sm:hover:bg-primary-light mb-8 flex w-auto cursor-pointer items-center space-x-3 rounded-lg px-4 py-2 text-white">
                  <SparklesIcon className="h-5 w-5" />
                  <span>Generate Ideas</span>
                </div>

                <div className="space-y-6">
                  {[...Array(4)].map((_, rowIndex) => (
                    <div key={rowIndex} className="flex space-x-6">
                      {[...Array(2)].map((_, colIndex) => (
                        <div
                          key={colIndex}
                          className="bg-secondary-light flex items-center space-x-3 rounded-lg border border-gray-300 p-4 shadow-md"
                        >
                          <p className="text-primary-dark flex-1 text-sm">
                            How to build an effective email list from scratch
                          </p>
                          <BookmarkIcon className="text-secondary h-5 w-5" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <GetGeneralSuggestions />
        </div>
      </main>
    </div>
  );
}
