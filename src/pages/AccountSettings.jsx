import Sidebar from '@components/Sidebar';
import { useState } from 'react';

export default function AccountSettings() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-secondary-light flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-5 md:ml-10">
        <div className="mb-4 flex justify-end">
          <button className="border-primary-lighter text-primary-lighter rounded-lg border px-3 py-2 text-sm md:px-4 md:py-2">
            Sign Out
          </button>
        </div>

        <h1 className="text-primary-dark mb-4 text-2xl font-bold md:text-3xl">
          Account Settings
        </h1>

        {/* Main Content Box */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {/* User Box */}
          <div className="border-secondary-lighter w-full rounded-lg border bg-white p-4 shadow-lg">
            <h2 className="text-primary-dark mb-4 text-lg font-semibold md:text-xl">
              User Information
            </h2>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-primary-dark block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="focus:border-primary w-full rounded-lg border border-gray-300 p-2 text-sm focus:outline-hidden"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-primary-dark block text-sm font-medium"
                >
                  Change Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter new password"
                  className="focus:border-primary w-full rounded-lg border border-gray-300 p-2 text-sm focus:outline-hidden"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-primary-dark block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm new password"
                  className="focus:border-primary w-full rounded-lg border border-gray-300 p-2 text-sm focus:outline-hidden"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-2 md:flex-row md:gap-0">
              <button className="border-primary-lighter text-primary-lighter flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm">
                <i className="fas fa-trash text-primary cursor-pointer"></i>
                Delete Account
              </button>
              <button className="bg-primary-dark rounded-lg px-3 py-2 text-sm text-white">
                Update
              </button>
            </div>
          </div>

          {/* Subscription Box */}
          <div className="border-secondary-lighter w-full rounded-lg border bg-white p-4 shadow-lg">
            <h2 className="text-primary-dark mb-4 text-lg font-semibold md:text-xl">
              Subscription Details
            </h2>

            <div className="space-y-4">
              <div className="border-secondary-lighter rounded-lg border p-2">
                <p className="text-primary-dark text-sm">Current Plan</p>
                <p className="text-primary-dark font-semibold">Pro</p>
              </div>

              <div className="border-secondary-lighter rounded-lg border p-2">
                <p className="text-primary-dark text-sm">Subscribed From</p>
                <p className="text-primary-dark">20.2.2024</p>
              </div>

              <div className="border-secondary-lighter rounded-lg border p-2">
                <p className="text-primary-dark text-sm">Valid Till</p>
                <p className="text-primary-dark font-semibold">20-9-2024</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-2 md:flex-row md:gap-0">
              <button className="border-slategray text-slategray rounded-lg border px-3 py-2 text-sm">
                Manage Subscription
              </button>
              <button className="border-red text-red rounded-lg border px-3 py-2 text-sm">
                Cancel Subscription
              </button>
            </div>
          </div>

          {/* Projects Box*/}
          <div className="border-secondary-lighter col-span-1 w-full rounded-lg border bg-white p-4 shadow-lg md:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-primary-dark text-lg font-semibold md:text-xl">
                Projects
              </h2>
              <button className="bg-primary-dark flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white">
                <i className="fa-solid fa-circle-plus"></i>
                Add Project
              </button>
            </div>

            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-5">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="relative">
                  <button
                    className="flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-500 p-2 text-xs focus:outline-hidden"
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
                      <div className="hover:bg-primary-light cursor-pointer px-4 py-2">
                        Option 1
                      </div>
                      <div className="hover:bg-primary-light cursor-pointer px-4 py-2">
                        Option 2
                      </div>
                      <div className="hover:bg-primary-light cursor-pointer px-4 py-2">
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
