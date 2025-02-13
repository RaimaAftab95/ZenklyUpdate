export default function Footer() {
  return (
    <footer className="bg-base-100 text-primary hover:text-primary-dark w-full rounded-t-2xl px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="space-y-6 lg:w-1/4">
            <div className="flex items-center space-x-1">
              <img src="/images/logo.png" alt="Logo" className="h-6" />
              <span className="text-lg font-bold">Zenkly</span>
            </div>

            <p className="text-sm">Automate your blog with AI</p>

            <div className="flex gap-4">
              {[
                {
                  src: '/images/facebook-social-logo.png',
                  alt: 'Facebook',
                  className: 'h-4'
                },
                {
                  src: '/images/twitter-social-logo.png',
                  alt: 'Twitter',
                  className: 'h-4'
                },
                {
                  src: '/images/instagram-social-logo.png',
                  alt: 'Instagram',
                  className: 'h-4'
                },
                {
                  src: '/images/combined-shape-social-logo.png',
                  alt: 'Shape',
                  className: 'h-4'
                }
              ].map((icon, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className={icon.className}
                  />
                </div>
              ))}
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
                        className="text-primary hover:text-primary-dark text-sm hover:underline"
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

        <hr className="border-primary mx-0 my-6 w-full" />

        <div className="text-center text-sm">
          &copy; 2020. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
