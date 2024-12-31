import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';
import QuoteBox from '../components/QuoteBox';

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
    <div className="min-h-screen bg-secondary-light p-10">
      <Navbar />

      <div className="flex flex-col items-center justify-center gap-8 py-12 lg:flex-row lg:items-stretch">
        <SignupForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <QuoteBox />
      </div>

      <Footer />
    </div>
  );
}
