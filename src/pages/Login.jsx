import LoginForm from '@components/LoginForm';
import QuoteBox from '@components/QuoteBox';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-stretch">
        <LoginForm />

        <QuoteBox />
      </div>

      <Footer />
    </>
  );
}
