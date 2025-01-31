import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProgressBox from '../components/ProgressBox';

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const progress = 20;
  const location = useLocation();

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className="absolute left-4 top-4 z-50 block md:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <i className="fas fa-times text-2xl text-primary"></i>
        ) : (
          <i className="fas fa-bars text-2xl text-primary"></i>
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isMenuOpen
            ? 'translate-x-0 bg-primary-light'
            : '-translate-x-full bg-secondary-light'
        } fixed left-0 top-0 z-40 h-full w-60 transform text-primary transition-transform duration-300 md:relative md:block md:translate-x-0 md:bg-secondary-light`}
      >
        <div className="space-y-6 p-4">
          <div className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-lg font-bold">Logo</span>
          </div>

          <div className="relative">
            <button
              className="flex cursor-pointer items-center space-x-3 rounded-lg border-none bg-white p-2 font-bold text-primary focus:outline-none"
              onClick={toggleDropdown}
            >
              <img
                src="/images/cd-icon-image.png"
                alt="Dropdown Icon"
                className="h-6 w-6"
              />
              <span>Content Drips</span>
              <i
                className={`fas ${
                  isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'
                } ml-auto`}
              ></i>
            </button>
            {isDropdownOpen && (
              <div className="mt-2 space-y-2 rounded-md bg-secondary-light p-2 shadow-lg">
                <div className="cursor-pointer px-4 py-2 hover:bg-primary-light">
                  Option 1
                </div>
                <div className="cursor-pointer px-4 py-2 hover:bg-primary-light">
                  Option 2
                </div>
                <div className="cursor-pointer px-4 py-2 hover:bg-primary-light">
                  Option 3
                </div>
              </div>
            )}
          </div>

          {/* Menu Items */}
          <nav className="space-y-4">
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-secondary-light sm:hover:bg-primary-light">
              <i className="fas fa-bahai text-primary"></i>
              <span>Generate Ideas</span>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-secondary-light sm:hover:bg-primary-light">
              <i className="fas fa-bookmark text-primary"></i>
              <span>Saved Ideas</span>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-secondary-light sm:hover:bg-primary-light">
              <i className="fas fa-circle-up text-primary"></i>
              <span>Upgrade Account</span>
            </div>
          </nav>
        </div>

        {location.pathname !== '/generate-idea' && (
          <ProgressBox progress={progress} />
        )}

        {/* Bottom Section */}
        <div className="p-4">
          <hr className="my-4 border-gray-500" />
          <nav className="space-y-4">
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-secondary-light sm:hover:bg-primary-light">
              <i className="far fa-circle-question text-primary"></i>
              <span>Need Help?</span>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-secondary-light sm:hover:bg-primary-light">
              <i className="fas fa-right-to-bracket text-primary"></i>
              <span>Sign Out</span>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
