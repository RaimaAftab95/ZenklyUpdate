import { useState } from 'react';

export default function GetGeneralSuggestions() {
  const [generalSuggestions, setGeneralSuggestions] = useState([]);

  const handleGetSuggestions = () => {
    const suggestions = [
      'Top 10 content marketing strategies',
      'Benefits of blogging for your business',
      'How to engage your audience effectively',
      'Best practices for SEO in 2025'
    ];
    setGeneralSuggestions(suggestions);
  };

  return (
    <div className="mt-10">
      <button
        onClick={handleGetSuggestions}
        className="w-auto cursor-pointer rounded-lg bg-secondary px-6 py-3 text-white hover:bg-primary-light hover:text-primary-dark"
      >
        Get General Suggestions
      </button>

      {generalSuggestions.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-lg font-bold text-primary-dark">
            General Suggestions
          </h2>
          <ul className="list-disc pl-6 text-left text-sm text-gray-700">
            {generalSuggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
