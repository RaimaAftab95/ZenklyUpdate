import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agreedToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="bg-[#fff6ed] p-10">
      <Navbar />

      <div className="flex flex-col items-center justify-center gap-8 py-12 lg:flex-row lg:items-stretch">
        {/* Sign Up Form */}
        <div className="w-full max-w-sm flex-1 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-3xl font-semibold text-[#BA5914]">
            Sign Up
          </h2>
          <h6 className="text-center">Time to automate your SEO with AI</h6>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-5">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2"
                placeholder="Email"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2"
                placeholder="Password"
              />
            </div>

            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="agreedToTerms"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="agreedToTerms" className="text-gray-700">
                I agree to the{' '}
                <a href="/terms" className="text-[#BA5914] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="/privacy-policy"
                  className="text-[#BA5914] hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#BA5914] py-2 text-white hover:bg-[#9a4612]"
              disabled={!formData.agreedToTerms}
            >
              Sign Up
            </button>

            <div className="mt-6 space-y-4">
              <button className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600">
                <i className="fab fa-google mr-2"></i>
                Sign Up with Google
              </button>
              <button className="w-full rounded-md bg-blue-800 py-2 text-white hover:bg-blue-900">
                <i className="fab fa-facebook-f mr-2"></i>
                Sign Up with Facebook
              </button>
            </div>
          </form>
        </div>

        {/* Quote Box */}
        <div className="w-full max-w-sm flex-1 rounded-lg bg-[#ffedd5] p-8 shadow-lg">
          <div className="text-4xl text-[#BA5914]">
            <i className="fas fa-quote-right"></i>
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-[#BA5914]">
            Most useful for product research
          </h3>
          <p className="text-gray-700">
            Literally, we have saved thousands of dollars in research and
            development of our new product this way.
          </p>

          <div className="mt-8 rounded-full bg-white p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/person.jpg"
                  alt="User"
                  className="h-16 w-16 rounded-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-[#333]">
                      Michael Perry
                    </p>
                    <p className="text-sm text-gray-500">Works at Nike</p>
                  </div>

                  <div className="mt-1 flex">
                    <i className="fa fa-star text-yellow-500"></i>
                    <i className="fa fa-star text-yellow-500"></i>
                    <i className="fa fa-star text-yellow-500"></i>
                    <i className="fa fa-star text-yellow-500"></i>
                    <i className="fa fa-star text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
