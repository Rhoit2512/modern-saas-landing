export default function DownloadAppSection() {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Get the admybrand app
        </h2>
        

        {/* Download Boxes */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Play Store */}
          <a
            href="https://play.google.com/store" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-4 hover:bg-white/20 transition transform hover:scale-105 shadow-lg"
          >
            <img
              src="/playstore-icon.png"
              alt="Google Play"
              className="w-10 h-10 mr-4"
            />
            <div className="text-left">
              <span className="text-xs text-slate-300">get it on</span>
              <p className="text-lg font-semibold">Google Play</p>
            </div>
          </a>

          {/* App Store */}
          <a
            href="https://apps.apple.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-4 hover:bg-white/20 transition transform hover:scale-105 shadow-lg"
          >
            <img
              src="/appstore-icon.png"
              alt="App Store"
              className="w-10 h-10 mr-4"
            />
            <div className="text-left">
              <span className="text-xs text-slate-300">download on the</span>
              <p className="text-lg font-semibold">App Store</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
