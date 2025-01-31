import PropTypes from 'prop-types';

export default function ProgressBox({ progress }) {
  return (
    <div className="mx-4 rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="relative flex items-center justify-center">
          <svg className="h-12 w-12">
            <circle
              className="text-gray-200"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
            />
            <circle
              className="text-primary"
              strokeWidth="4"
              strokeDasharray="125.6"
              strokeDashoffset={125.6 - (125.6 * progress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
            />
          </svg>

          <span className="text-sm font-bold text-gray-700">Credits</span>
        </div>
        <div className="ml-4 flex flex-col items-start">
          <button className="mt-2 rounded bg-primary px-3 py-1 text-xs font-semibold text-white hover:bg-primary-dark">
            Upgrade
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>Total</span>
        <span className="font-semibold">50</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Remaining</span>
        <span className="font-semibold">38</span>
      </div>
    </div>
  );
}
// Prop validation
ProgressBox.propTypes = {
  progress: PropTypes.number.isRequired
};
