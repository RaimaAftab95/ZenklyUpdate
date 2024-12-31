export default function SocialSignupButtons() {
  return (
    <div className="mt-6 space-y-4">
      <button className="w-full rounded-md bg-blue-500 py-2 text-xs text-white hover:bg-blue-600">
        <i className="fab fa-google mr-2"></i>
        Sign Up with Google
      </button>
      <button className="w-full rounded-md bg-blue-800 py-2 text-xs text-white hover:bg-blue-900">
        <i className="fab fa-facebook-f mr-2"></i>
        Sign Up with Facebook
      </button>
    </div>
  );
}
