import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ProgressBox from '../components/ProgressBox';
import {
  BookmarkIcon,
  SparklesIcon,
  ArrowRightStartOnRectangleIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/solid';

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
        className="absolute top-4 left-4 z-50 block md:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <XMarkIcon className="text-primary h-6 w-6" />
        ) : (
          <Bars3Icon className="text-primary h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isMenuOpen
            ? 'bg-base-100 translate-x-0'
            : 'bg-secondary-light -translate-x-full'
        } text-primary md:bg-secondary-light fixed top-0 left-0 z-40 h-full w-60 transform transition-transform duration-300 md:relative md:block md:translate-x-0`}
      >
        <div className="space-y-6 p-4">
          <div className="flex items-center space-x-1">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-lg font-bold">Zenkly</span>
          </div>

          <div className="relative text-black">
            <button
              className="flex cursor-pointer items-center space-x-3 rounded-lg border-none bg-white p-2 text-xs focus:outline-hidden"
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
              <div className="bg-secondary-light mt-2 space-y-2 rounded-md p-2 text-xs shadow-lg">
                <div className="hover:bg-base-100 cursor-pointer px-2 py-2">
                  Option 1
                </div>
                <div className="hover:bg-base-100 cursor-pointer px-2 py-2">
                  Option 2
                </div>
                <div className="hover:bg-base-100 cursor-pointer px-2 py-2">
                  Option 3
                </div>
              </div>
            )}
          </div>

          {/* Menu Items */}

          <nav className="text-secondary text-sm leading-tight font-semibold tracking-normal">
            <NavLink
              to="/generate-idea"
              className={({ isActive }) =>
                `flex items-center space-x-3 rounded-lg p-2 ${
                  isActive
                    ? 'bg-primary-light text-primary'
                    : 'hover:bg-secondary-light sm:hover:bg-primary-light'
                }`
              }
            >
              <SparklesIcon className="h-5 w-5" />
              <span>Generate Ideas</span>
            </NavLink>
            <NavLink
              to="/saved-ideas"
              className={({ isActive }) =>
                `flex items-center space-x-3 rounded-lg p-2 ${
                  isActive
                    ? 'bg-primary-light text-primary'
                    : 'hover:bg-secondary-light sm:hover:bg-primary-light'
                }`
              }
            >
              <BookmarkIcon className="h-5 w-5" />
              <span>Saved Ideas</span>
            </NavLink>
            <NavLink
              to="/upgrade-account"
              className={({ isActive }) =>
                `flex items-center space-x-3 rounded-lg p-2 ${
                  isActive
                    ? 'bg-primary-light text-primary'
                    : 'hover:bg-secondary-light sm:hover:bg-primary-light'
                }`
              }
            >
              <ArrowUpCircleIcon className="h-5 w-5" />
              <span>Upgrade Account</span>
            </NavLink>
          </nav>
        </div>

        <div className="h-52"></div>
        {location.pathname !== '/generate-idea' && (
          <ProgressBox progress={progress} />
        )}

        {/* Bottom Section */}
        <div className="p-4">
          <hr className="border-secondary-lighter my-5 w-1/2" />
          <nav className="text-secondary text-sm leading-tight font-semibold">
            <div className="hover:bg-secondary-light sm:hover:bg-primary-light flex cursor-pointer items-center space-x-3 rounded-lg p-2">
              <QuestionMarkCircleIcon className="h-5 w-5" />
              <span>Need Help?</span>
            </div>
            <NavLink
              to="/account-settings"
              className={({ isActive }) =>
                `flex items-center space-x-3 rounded-lg p-2 ${
                  isActive
                    ? 'bg-primary-light text-primary'
                    : 'hover:bg-secondary-light sm:hover:bg-primary-light'
                }`
              }
            >
              <UserIcon className="h-5 w-5" />
              <span>Account Settings</span>
            </NavLink>
            <NavLink
              to="/"
              className="hover:bg-secondary-light sm:hover:bg-primary-light flex cursor-pointer items-center space-x-3 rounded-lg p-2"
            >
              <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
              <span>Sign Out</span>
            </NavLink>
          </nav>
        </div>
      </aside>
    </>
  );
}
