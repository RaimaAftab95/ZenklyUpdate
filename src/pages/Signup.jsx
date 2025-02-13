import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import SignupForm from '@components/SignupForm';
import QuoteBox from '@components/QuoteBox';

export default function Signup() {
  return (
    <>
      <Navbar />

      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-stretch">
        <SignupForm />
        <QuoteBox />
      </div>

      <Footer />
    </>
  );
}
