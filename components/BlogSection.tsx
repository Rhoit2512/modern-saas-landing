export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts</h2>
        <p className="text-gray-400 text-center mb-12">
          Insights, tips, and stories from our team.
        </p>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Blog Card */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                How AI is Changing Marketing
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Discover how artificial intelligence is transforming marketing
                strategies for modern brands.
              </p>
              <a href="#" className="text-purple-400 hover:underline">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Card */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                10 Tips for Successful Branding
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                A practical guide to creating a strong and memorable brand
                identity.
              </p>
              <a href="#" className="text-purple-400 hover:underline">
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Card */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Scaling Your Startup with AI
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Learn how AI tools can help you scale operations and reach
                customers faster.
              </p>
              <a href="#" className="text-purple-400 hover:underline">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
