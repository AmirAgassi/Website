export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/your-video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-6xl font-bold mb-6">
          Amir
        </h1>
        <p className="text-xl opacity-90">
          Developer & Creator
        </p>
      </div>
    </div>
  );
}
