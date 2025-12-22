import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import City from '../assets/city2.png';
import '../CSS/City.css';

export default function WelcomePage() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleEnter = () => {
    navigate("/City");
  };

  return (
    <div 
      className="min-h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with proper scaling */}
      <div className="absolute inset-0">
      <img
        src={City}
        alt="City background"
        className="w-full h-full object-cover object-center"
      />
    </div>

      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60 " />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-700" />
      </div>

      {/* Content Container */}
      <div 
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >

        {/* Title */}
        <h1 className="text-5xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 mt-2">
            Social Media
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300">
            &
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300">
            Platforms
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 mb-18 mt-10">
            City
          </span>
        </h1>
        <p className="text-white text-3xl mb-10">This Game help you to explore social media apps and platofroms to use it with benefit way and develop yourself in life and career</p>

        {/* CTA Button */}
        <button
          onClick={handleEnter}
          className="group relative px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-2xl 
                     bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-size-200 
                     text-black shadow-2xl shadow-emerald-500/40
                     hover:shadow-cyan-400/60 hover:scale-105 
                     active:scale-95
                     transition-all duration-300 ease-out
                     animate-gradient-x
                     overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
            <span>Enter the City</span>
          </span>
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" />

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 200% center; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .bg-size-200 {
          background-size: 200% 100%;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}