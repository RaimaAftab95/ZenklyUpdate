import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="mx-auto flex w-11/12 max-w-4xl items-center justify-between rounded-full bg-[#ffedd5] p-3">
      <div className="text-lg font-bold text-[#BA5914]">Logo</div>

      <div className="hidden space-x-6 md:flex">
        <a href="/" className="text-[#c6c1b7] hover:text-[#BA5914]">
          Home
        </a>
        <a href="/features" className="text-[#c6c1b7] hover:text-[#BA5914]">
          Features
        </a>
        <a href="/login" className="text-[#c6c1b7] hover:text-[#BA5914]">
          Login
        </a>
        <button className="rounded-full bg-[#BA5914] px-4 py-2 text-white">
          Sign Up
        </button>
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className="fas fa-times text-2xl text-[#BA5914]"></i>
          ) : (
            <i className="fas fa-bars text-2xl text-[#BA5914]"></i>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-20 w-full bg-[#ffedd5] p-6 md:hidden">
          <a href="/" className="block text-[#c6c1b7] hover:text-[#BA5914]">
            Home
          </a>
          <a
            href="/features"
            className="block text-[#c6c1b7] hover:text-[#BA5914]"
          >
            Features
          </a>
          <a
            href="/login"
            className="block text-[#c6c1b7] hover:text-[#BA5914]"
          >
            Login
          </a>
          <button className="block w-full rounded-full bg-[#BA5914] px-4 py-2 text-white">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
