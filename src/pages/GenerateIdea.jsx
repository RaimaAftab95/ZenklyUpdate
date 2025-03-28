export default function GenerateIdea() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6">
        <h1 className="text-secondary mb-6 text-4xl font-bold">
          Generate Ideas
        </h1>

        <div className="mb-8 max-h-96 w-full max-w-4xl rounded-2xl bg-white p-10 shadow-lg">
          <div className="text-secondary relative mb-8 flex flex-col items-center">
            <img
              src="/images/dashboard-icon.png"
              alt="Dashboard Icon"
              className="mb-4 h-40 w-60"
            />
            {/* text on image */}
            <div className="text-secondary absolute inset-x-0 top-2/4 flex flex-col items-center justify-center">
              <p className="text-lg leading-6 font-semibold">
                Please wait while we are fetching your blog posts...
              </p>
              <p className="text-sm leading-5">This may take a few seconds.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
