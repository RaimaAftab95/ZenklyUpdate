export default function GenerateIdea() {
  return (
    <div className="flex min-h-screen bg-lightbg">
      {/* Sidebar */}
      <aside className="bg-darkshade text-darkshade flex w-60 flex-col justify-between p-4">
        {/* Top Section */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-lg font-bold">Logo</span>
          </div>

          {/* Dropdown */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/icon.png"
              alt="Dropdown Icon"
              className="h-6 w-6"
            />
            <span className="font-bold text-black">Content Drips</span>
          </div>

          {/* Menu Items */}
          <nav className="space-y-4">
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-darkbg">
              <i className="fas fa-bahai text-darkshade"></i>
              <span>Generate Ideas</span>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-darkbg">
              <i className="fas fa-bookmark text-darkshade"></i>
              <span>Saved Ideas</span>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-darkbg">
              <i className="fas fa-circle-up text-darkshade"></i>
              <span>Upgrade Account</span>
            </div>
          </nav>
        </div>

        {/* Bottom Section */}
        <div>
          <hr className="my-4 border-gray-500" />
          <nav className="space-y-4">
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-darkbg">
              <i className="far fa-circle-question text-darkshade"></i>
              <span>Need Help?</span>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-darkbg">
              <i className="fas fa-right-to-bracket text-darkshade"></i>
              <span>Sign Out</span>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        {/* Heading */}
        <h1 className="text-darkshade mb-6 text-left text-3xl font-bold">
          Generate Ideas
        </h1>

        {/* Main Content Box */}
        <div>
          <div className="w-full max-w-3xl rounded-lg bg-white p-10 text-center shadow-lg">
            <div className="text-darkshade mb-6">
              <i className="fa-solid fa-file-import mb-4 text-6xl"></i>
              <p className="text-darkshade text-lg font-bold">
                Please wait while we are fetching your blog posts....
              </p>
            </div>
            <p className="text-darkshade text-sm">
              This may take a few seconds.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
