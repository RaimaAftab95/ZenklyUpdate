export default function QuoteBox() {
  return (
    <div className="flex w-full max-w-sm flex-1 flex-col justify-between rounded-lg bg-[#ffedd5] p-8 shadow-lg">
      <div>
        <div className="text-4xl text-[#BA5914]">
          <i className="fas fa-quote-right"></i>
        </div>
        <h3 className="mb-4 text-2xl font-semibold text-[#BA5914]">
          Most useful for product research
        </h3>
        <p className="text-gray-700">
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
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-[#333]">
                  Michael Perry
                </p>
                <p className="text-sm text-gray-500">Works at Nike</p>
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
