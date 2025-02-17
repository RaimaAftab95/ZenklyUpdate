import PropTypes from 'prop-types';

export default function ProgressBox({ progress }) {
  return (
    <div className="border-primary mx-4 rounded-lg border p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="relative flex items-center justify-center">
          <svg className="h-12 w-12">
            <circle
              className="text-gray-400"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
            />
            <circle
              className="text-secondary"
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

          <span className="text-sm leading-tight font-medium tracking-normal text-black">
            Credits
          </span>
        </div>
        <div className="flex flex-col items-start">
          <button className="border-primary-lighter text-primary-lighter mt-2 rounded-lg border p-2 text-xs leading-none font-medium tracking-normal">
            Upgrade
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm leading-tight font-medium text-gray-600">
        <span>Total</span>
        <span>50</span>
      </div>
      <div className="flex justify-between text-sm leading-tight font-medium text-gray-600">
        <span>Remaining</span>
        <span>38</span>
      </div>
    </div>
  );
}
// Prop validation
ProgressBox.propTypes = {
  progress: PropTypes.number.isRequired
};
