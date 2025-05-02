import PropTypes from 'prop-types';

export default function ProgressBox({ progress }) {
  return (
    <div className="border-primary mx-4 rounded-lg border p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="border-t-secondary h-5 w-5 animate-spin rounded-full border-2 border-gray-300" />
          <span className="font-medium">Credits</span>
        </div>
        <button className="border-primary text-primary hover:text-secondary mt-2 rounded-lg border p-2 text-xs leading-none font-medium">
          Upgrade
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total</span>
          <span className="font-medium">50</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Remaining</span>
          <span className="font-medium">{progress}</span>
        </div>
      </div>
    </div>
  );
}

// Prop validation
ProgressBox.propTypes = {
  progress: PropTypes.number.isRequired
};
