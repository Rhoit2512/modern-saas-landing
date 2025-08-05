export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-900 to-indigo-900 text-white">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded font-medium"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
