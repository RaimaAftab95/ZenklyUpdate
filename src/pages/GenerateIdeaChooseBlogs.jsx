import Sidebar from '@components/Sidebar';
import { useState } from 'react';
import {
  BookmarkIcon,
  SparklesIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

export default function GenerateIdeaChooseBlogs() {
  const [selectedBlogs, setSelectedBlogs] = useState([]);

  const toggleSelection = (index) => {
    setSelectedBlogs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const selectAllBlogs = () => {
    setSelectedBlogs(selectedBlogs.length === 0 ? [...Array(8).keys()] : []);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-secondary mb-6 text-4xl font-bold">
          Generate Ideas
        </h1>

        <div className="w-full rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="w-full md:w-3/5">
              <h2 className="text-lg font-semibold text-black">Choose Blogs</h2>
              <p className="text-sm text-black">
                Pick a few blogs to use as inspiration
              </p>

              <div className="my-4 flex justify-end">
                <button
                  onClick={selectAllBlogs}
                  className="rounded-full border border-gray-400 p-1 text-xs leading-4 text-gray-400 hover:bg-gray-100"
                >
                  Select All
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 shadow-md transition ${selectedBlogs.includes(index) ? 'border-primary' : 'border-gray-300 bg-white'}`}
                    onClick={() => toggleSelection(index)}
                  >
                    <p className="flex-1 text-sm leading-tight font-medium">
                      How to build an effective email list from scratch
                    </p>
                    <button className="focus:outline-none">
                      {selectedBlogs.includes(index) ? (
                        <CheckCircleIcon className="text-primary h-5 w-5" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              <hr className="my-6 border-gray-300" />
              <h2 className="text-lg font-semibold text-black">
                Focus Keyword
              </h2>
              <p className="text-sm text-black">
                Let AI generate on something specific (optional)
              </p>

              <input
                type="text"
                placeholder='"linkedin carousels"'
                className="focus:border-primary mt-4 w-2/3 rounded-lg border border-gray-300 p-2 focus:outline-none"
              />

              <div className="bg-secondary hover:bg-primary mt-6 inline-flex cursor-pointer items-center space-x-3 rounded-lg px-4 py-2 text-white transition">
                <SparklesIcon className="h-5 w-5" />
                <span className="leading-5">Generate Ideas</span>
              </div>
            </div>

            <div className="hidden border-l border-gray-300 md:block"></div>

            <div className="mt-8 w-full md:mt-0 md:w-2/5">
              <h2 className="text-lg font-semibold text-black">
                Generated Ideas
              </h2>
              <p className="text-sm text-black">Save the ones you like</p>

              <div className="mt-6 space-y-3">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-gradient-bg flex items-center space-x-3 rounded-lg p-4 shadow-md"
                    style={{ background: 'var(--color-gradient-bg)' }}
                  >
                    <p className="text-secondary flex-1 text-sm leading-tight font-medium">
                      How to build an effective email list from scratch
                    </p>
                    <BookmarkIcon className="text-secondary h-5 w-5" />
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
