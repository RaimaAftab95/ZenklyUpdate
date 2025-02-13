import PropTypes from 'prop-types';

export default function ProgressBox({ progress }) {
  return (
    <div className="border-secondary-lighter mx-4 rounded-lg border p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="relative flex items-center justify-center">
          <svg className="h-12 w-12">
            <circle
              className="text-lightgraytext"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
            />
            <circle
              className="text-primary-dark"
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

          <span className="text-xs font-semibold text-black">Credits</span>
        </div>
        <div className="flex flex-col items-start">
          <button className="border-primary-lighter text-primary-lighter mt-2 rounded-lg border px-1 py-1 text-xs font-semibold">
            Upgrade
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-xs text-gray-600">
        <span>Total</span>
        <span className="font-semibold">50</span>
      </div>
      <div className="flex justify-between text-xs text-gray-600">
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
