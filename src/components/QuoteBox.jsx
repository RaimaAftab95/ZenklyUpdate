import { StarIcon } from '@heroicons/react/24/solid';

export default function QuoteBox() {
  return (
    <div className="bg-base-100 rounded-box flex max-w-xs flex-col justify-between px-4 py-8">
      <div>
        <div className="text-primary text-xl">
          <img
            src="/images/quotes-icon.png"
            alt="Quotes Icon"
            className="text-primary h-6 w-6"
          />
        </div>
        <h1 className="text-base-content my-4 text-2xl leading-tight font-semibold tracking-tighter">
          Most useful for <br /> product research
        </h1>
        <p className="text-secondary text-sm leading-4 tracking-normal">
          Literally, we have saved thousands of dollars in research and
          development of our new product this way.
        </p>
      </div>

      <div className="mt-8 rounded-full bg-white p-2 shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="shrink-0">
            <img
              src="/images/person.png"
              alt="User"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm leading-4 font-medium tracking-normal text-gray-900">
                  Michael Perry
                </p>
                <p className="text-xs leading-4 font-medium tracking-normal text-gray-400">
                  Works at Nike
                </p>
              </div>
              <div className="mr-2.5 flex text-yellow-500">
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
                <StarIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
