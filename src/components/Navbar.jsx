import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="mx-auto flex w-11/12 max-w-4xl items-center justify-between rounded-full bg-darkbg p-3">
      <div className="darkbrown-text text-lg font-bold">Logo</div>

      <div className="hidden space-x-6 md:flex">
        <a href="/" className="navlinks-graytext">
          Home
        </a>
        <a href="/features" className="navlinks-graytext">
          Features
        </a>
        <a href="/login" className="navlinks-graytext">
          Login
        </a>
        <button className="rounded-full bg-darkbrown px-4 py-2 text-white">
          Sign Up
        </button>
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className="fas fa-times darkbrown-text text-2xl"></i>
          ) : (
            <i className="fas fa-bars darkbrown-text text-2xl"></i>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-20 w-full bg-darkbg p-6 md:hidden">
          <a href="/" className="navlinks-graytext block">
            Home
          </a>
          <a href="/features" className="navlinks-graytext block">
            Features
          </a>
          <a href="/login" className="navlinks-graytext block">
            Login
          </a>
          <button className="block w-full rounded-full bg-darkbrown px-4 py-2 text-white">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
