import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// eslint-disable-next-line react/prop-types
function NavItem({ to, label }) {
  return (
    <li>
      <Link to={to} className="px-1">
        {label}
      </Link>
    </li>
  );
}

function SignUpButton() {
  return (
    <Link to="/signup">
      <button className="btn btn-primary text-primary-content rounded-box btn-sm">
        Sign Up
      </button>
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/features', label: 'Features' },
    { to: '/', label: 'Login' }
  ];

  return (
    <nav className="navbar bg-base-100 rounded-box relative mx-auto my-10 w-11/12 max-w-4xl px-4">
      <div className="flex flex-1 items-center">
        <img src="/images/logo.png" alt="Logo" className="h-4 object-contain" />
        <h1 className="text-primary px-1 text-lg font-bold">Zenkly</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden flex-none md:flex">
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
          <li>
            <SignUpButton />
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="flex-none md:hidden">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <XMarkIcon className="text-primary h-6 w-6" />
          ) : (
            <Bars3Icon className="text-primary h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute right-0 left-0 z-50 mt-2 px-4 md:hidden`}
        style={{ top: 'calc(100% - 8px)' }}
      >
        <ul className="bg-base-100 rounded-b-box w-full space-y-2.5 p-4 shadow-lg">
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
          <li>
            <SignUpButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
