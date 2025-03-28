import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AccountSettings() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-10">
        <div className="mb-4 flex w-full max-w-4xl flex-col">
          <div className="flex w-full justify-end pr-0 md:pr-16">
            <Link to="/signup">
              <button
                className="rounded-lg border p-2 text-sm leading-5"
                style={{ borderColor: '#C2410C', color: '#C2410C' }}
              >
                Sign Out
              </button>
            </Link>
          </div>
          <h1 className="text-secondary mt-2 text-4xl font-bold">
            Account Settings
          </h1>
        </div>

        {/* Main Content*/}
        <div className="text-secondary grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {/* User*/}
          <div
            className="w-full rounded-2xl border bg-white p-4 shadow-lg"
            style={{ borderColor: '#FFDCB7' }}
          >
            <h2 className="mb-4 text-xl leading-6 font-semibold">
              User Information
            </h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="text-sm leading-5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="focus:border-primary w-full rounded-xl border border-gray-300 p-2 text-sm focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="password" className="text-sm leading-5">
                  Change Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter new password"
                  className="focus:border-primary w-full rounded-xl border border-gray-300 p-2 text-sm focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="text-sm leading-5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm new password"
                  className="focus:border-primary w-full rounded-xl border border-gray-300 p-2 text-sm focus:outline-hidden"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-2 md:flex-row md:gap-0">
              <button
                className="flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm leading-5"
                style={{ borderColor: '#C2410C', color: '#C2410C' }}
              >
                <TrashIcon
                  className="h-4 w-4 cursor-pointer"
                  style={{ color: '#C2410C' }}
                />
                Delete Account
              </button>
              <button className="bg-secondary rounded-lg px-3 py-2 text-sm leading-5 text-white">
                Update
              </button>
            </div>
          </div>

          {/*Subscription*/}
          <div
            className="w-full rounded-2xl border bg-white p-4 shadow-lg"
            style={{ borderColor: '#FFDCB7' }}
          >
            <h2 className="mb-4 text-xl leading-6 font-semibold">
              Subscription Details
            </h2>

            <div className="space-y-4">
              <div
                className="rounded-lg border p-2"
                style={{ borderColor: '#FFDCB7' }}
              >
                <p className="text-sm leading-5">Current Plan</p>
                <p className="text-lg leading-6 font-semibold">Pro</p>
              </div>

              <div
                className="rounded-lg border p-2"
                style={{ borderColor: '#FFDCB7' }}
              >
                <p className="text-sm leading-5">Subscribed From</p>
                <p className="text-lg leading-6 font-semibold">20.2.2024</p>
              </div>

              <div
                className="rounded-lg border p-2"
                style={{ borderColor: '#FFDCB7' }}
              >
                <p className="text-sm leading-5">Valid Till</p>
                <p className="text-lg leading-6 font-semibold">20-9-2024</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-2 md:flex-row md:gap-0">
              <button
                className="rounded-lg border px-0.5 py-2 text-sm leading-5 sm:p-2"
                style={{ borderColor: '#475569', color: '#475569' }}
              >
                Manage Subscription
              </button>
              <button
                className="border-red text-red rounded-lg border px-0.5 py-2 text-sm leading-5 sm:p-2"
                style={{ borderColor: '#EF4444', color: '#EF4444' }}
              >
                Cancel Subscription
              </button>
            </div>
          </div>

          {/* Projects Box*/}
          <div
            className="col-span-1 w-full rounded-2xl border bg-white p-4 shadow-lg md:col-span-2"
            style={{ borderColor: '#FFDCB7' }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="mb-2 text-xl leading-6 font-semibold">Projects</h2>
              <button className="bg-secondary flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white">
                <PlusCircleIcon className="h-4 w-4" />
                Add Project
              </button>
            </div>
            <div className="mb-10 grid w-full max-w-3xl grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center"
                >
                  <button
                    className="flex cursor-pointer items-center space-x-1 rounded-lg border border-gray-500 px-5 py-2 text-xs focus:outline-hidden"
                    onClick={toggleDropdown}
                  >
                    <img
                      src="/images/cd-icon-image.png"
                      alt="Dropdown Icon"
                      className="h-4 w-4"
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
