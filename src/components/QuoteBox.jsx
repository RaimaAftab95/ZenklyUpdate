export default function QuoteBox() {
  return (
    <div className="flex w-full max-w-xs flex-1 flex-col justify-between rounded-lg bg-primary-light p-8 shadow-lg">
      <div>
        <div className="text-xl text-primary">
          <i className="fas fa-quote-right"></i>
        </div>
        <h3 className="mb-4 text-xl font-semibold text-primary">
          Most useful for product research
        </h3>
        <p className="text-sm text-gray-700">
          Literally, we have saved thousands of dollars in research and
          development of our new product this way.
        </p>
      </div>

      <div className="mt-8 rounded-full bg-white p-2 shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <img
              src="/images/person.jpg"
              alt="User"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-black">
                  Michael Perry
                </p>
                <p className="text-xs text-gray-500">Works at Nike</p>
              </div>
              <div className="mt-1 flex">
                <i className="fa fa-star text-yellow-500"></i>
                <i className="fa fa-star text-yellow-500"></i>
                <i className="fa fa-star text-yellow-500"></i>
                <i className="fa fa-star text-yellow-500"></i>
                <i className="fa fa-star text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
