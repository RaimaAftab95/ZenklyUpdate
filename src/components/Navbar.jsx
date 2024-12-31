import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="relative mx-auto flex w-11/12 max-w-4xl items-center justify-between rounded-full bg-primary-light p-3">
      <div className="text-lg font-bold text-primary hover:text-primary-dark">
        Logo
      </div>

      <div className="hidden space-x-6 md:flex">
        <a href="/" className="text-graytext hover:text-primary">
          Home
        </a>
        <a href="/features" className="text-graytext hover:text-primary">
          Features
        </a>
        <a href="/login" className="text-graytext hover:text-primary">
          Login
        </a>
        <button className="rounded-full bg-primary px-4 py-2 text-white hover:bg-primary-dark">
          Sign Up
        </button>
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <i className="fas fa-times text-2xl text-primary hover:text-primary-dark"></i>
          ) : (
            <i className="fas fa-bars text-2xl text-primary hover:text-primary-dark"></i>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-20 w-full bg-secondary-light p-6 md:hidden">
          <a href="/" className="block py-2 text-graytext hover:text-primary">
            Home
          </a>
          <a
            href="/features"
            className="block py-2 text-graytext hover:text-primary"
          >
            Features
          </a>
          <a
            href="/login"
            className="block py-2 text-graytext hover:text-primary"
          >
            Login
          </a>

          <button className="mt-4 block w-full rounded-full bg-primary px-4 py-2 text-white hover:bg-primary-dark">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
