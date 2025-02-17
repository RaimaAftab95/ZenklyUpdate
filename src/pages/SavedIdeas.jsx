import Sidebar from '@components/Sidebar';
import { TrashIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconOutline } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function SavedIdeas() {
  const [markedIdeas, setMarkedIdeas] = useState(Array(4).fill(false));

  const handleIconClick = (index) => {
    const newMarkedIdeas = [...markedIdeas];
    newMarkedIdeas[index] = !newMarkedIdeas[index];
    setMarkedIdeas(newMarkedIdeas);
  };

  return (
    <div className="bg-secondary-light flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-secondary mb-6 text-4xl font-bold">Saved Ideas</h1>

        <div className="mb-8 w-full max-w-4xl rounded-lg bg-white p-10 shadow-lg">
          <h2 className="text-lg leading-5 font-semibold tracking-normal text-black">
            Find all your generated ideas
          </h2>
          <p className="mb-4 text-sm text-black">
            Copy your favorite saved ideas to create posts
          </p>

          <div className="grid grid-cols-1 gap-6 space-y-6 sm:grid-cols-2 md:grid-cols-2">
            {[...Array(8)].map((_, rowIndex) => {
              const ideaIndex = rowIndex;
              return (
                <div
                  key={rowIndex}
                  className="flex flex-col rounded-lg p-4 shadow-md"
                  style={{ background: 'var(--color-gradient-bg)' }}
                >
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-sm font-bold ${
                        markedIdeas[ideaIndex]
                          ? 'text-primary'
                          : 'text-secondary'
                      }`}
                    >
                      How to build an effective email list from scratch
                    </p>
                    <div className="text-secondary flex space-x-3">
                      <TrashIcon className="h-4 w-4 cursor-pointer" />
                      <DocumentDuplicateIcon className="h-4 w-4 cursor-pointer" />

                      {markedIdeas[ideaIndex] ? (
                        <CheckCircleIconSolid
                          className="h-4 w-4 cursor-pointer"
                          onClick={() => handleIconClick(ideaIndex)}
                        />
                      ) : (
                        <CheckCircleIconOutline
                          className="h-4 w-4 cursor-pointer"
                          onClick={() => handleIconClick(ideaIndex)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    Aug 14, 2024
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
