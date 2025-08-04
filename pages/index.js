export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Modern SaaS Landing Page
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to your beautiful, component-driven SaaS landing page!
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
        Get Started
      </button>
    </main>
  )
}