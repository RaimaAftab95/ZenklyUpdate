import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function AccountSettings() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex min-h-screen bg-secondary-light">
      <Sidebar />
      <main className="flex-1 p-5 md:ml-10">
        <div className="mb-4 flex justify-end">
          <button className="rounded-lg border border-primary-lighter px-3 py-2 text-sm text-primary-lighter md:px-4 md:py-2">
            Sign Out
          </button>
        </div>

        <h1 className="mb-4 text-2xl font-bold text-primary-dark md:text-3xl">
          Account Settings
        </h1>

        {/* Main Content Box */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {/* User Box */}
          <div className="w-full rounded-lg border border-secondary-lighter bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-primary-dark md:text-xl">
              User Information
            </h2>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary-dark"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-primary-dark"
                >
                  Change Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter new password"
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-primary-dark"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm new password"
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-2 md:flex-row md:gap-0">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-primary-lighter px-3 py-2 text-sm text-primary-lighter">
                <i className="fas fa-trash cursor-pointer text-primary"></i>
                Delete Account
              </button>
              <button className="rounded-lg bg-primary-dark px-3 py-2 text-sm text-white">
                Update
              </button>
            </div>
          </div>

          {/* Subscription Box */}
          <div className="w-full rounded-lg border border-secondary-lighter bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold text-primary-dark md:text-xl">
              Subscription Details
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-secondary-lighter p-2">
                <p className="text-sm text-primary-dark">Current Plan</p>
                <p className="font-semibold text-primary-dark">Pro</p>
              </div>

              <div className="rounded-lg border border-secondary-lighter p-2">
                <p className="text-sm text-primary-dark">Subscribed From</p>
                <p className="text-primary-dark">20.2.2024</p>
              </div>

              <div className="rounded-lg border border-secondary-lighter p-2">
                <p className="text-sm text-primary-dark">Valid Till</p>
                <p className="font-semibold text-primary-dark">20-9-2024</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-2 md:flex-row md:gap-0">
              <button className="rounded-lg border border-slategray px-3 py-2 text-sm text-slategray">
                Manage Subscription
              </button>
              <button className="rounded-lg border border-red px-3 py-2 text-sm text-red">
                Cancel Subscription
              </button>
            </div>
          </div>

          {/* Projects Box*/}
          <div className="col-span-1 w-full rounded-lg border border-secondary-lighter bg-white p-4 shadow-lg md:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-primary-dark md:text-xl">
                Projects
              </h2>
              <button className="flex items-center gap-2 rounded-lg bg-primary-dark px-3 py-2 text-sm text-white">
                <i className="fa-solid fa-circle-plus"></i>
                Add Project
              </button>
            </div>

            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-5">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="relative">
                  <button
                    className="flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-500 p-2 text-xs focus:outline-none"
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
                    <div className="mt-2 space-y-2 rounded-md bg-secondary-light p-2 text-xs shadow-lg">
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
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
