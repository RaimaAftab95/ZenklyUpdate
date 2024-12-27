export default function Footer() {
  return (
    <footer className="w-full rounded-t-2xl bg-[#ffedd5] px-6 py-10 text-[#BA5914]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="space-y-6 lg:w-1/4">
            <div>
              <img src="/logo.png" alt="Logo" className="h-10" />
            </div>

            <p className="text-sm">Automate your blog with AI</p>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#BA5914] text-white transition-colors hover:bg-[#8A3F10]">
                <i className="fab fa-facebook-f"></i>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#BA5914] text-white transition-colors hover:bg-[#8A3F10]">
                <i className="fab fa-twitter"></i>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#BA5914] text-white transition-colors hover:bg-[#8A3F10]">
                <i className="fab fa-instagram"></i>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#BA5914] text-white transition-colors hover:bg-[#8A3F10]">
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:w-3/4">
            {[
              {
                heading: 'Lift Media',
                links: [
                  'Pricing',
                  'Updates',
                  'Beta',
                  'Newsletter',
                  'Collaboration'
                ]
              },
              {
                heading: 'Product',
                links: ['Buisness', 'Designers', 'Classrooms', 'Newcomers']
              },
              {
                heading: 'Resources',
                links: ['Tutorials', 'Editorials', 'Product', 'Newsroom']
              },
              {
                heading: 'About',
                links: ['Company', 'Careers', 'Legal', 'Help']
              }
            ].map((col, index) => (
              <div key={index}>
                <h4 className="mb-4 text-lg font-semibold">{col.heading}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-sm text-[#BA5914] hover:text-[#8A3F10] hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="mx-0 my-6 w-full border-[#BA5914]" />

        <div className="text-center text-sm">
          &copy; 2020. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
