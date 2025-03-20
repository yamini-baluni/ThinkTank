import React, { useEffect, useState, useRef } from 'react';
import { FaSearch, FaUsers, FaNetworkWired } from 'react-icons/fa';

function Hero() {
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-20 sm:py-32" style={{ backgroundColor: '#f3eee5' }}>
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side with logo and text */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            <div className="mb-8">
              <h1 className="text-[#251c1a] text-6xl md:text-7xl font-bold tracking-tighter">
                <span className="text-8xl md:text-9xl">T</span>hinkTank
              </h1>
              <div className="h-1 w-16 bg-[#251c1a] my-4 mx-auto"></div>
              <p className="text-[#251c1a]/80 text-xl md:text-2xl font-light italic">
                Connect. Collaborate. Grow.
              </p>
            </div>
            
            <p className="text-[#251c1a]/70 text-lg mb-8 max-w-lg mx-auto">
              Join a thriving community of professionals. Connect with experts, 
              share knowledge, and advance your career through meaningful connections.
            </p>
            
            {/* Search Bar */}
            <div 
              ref={searchRef}
              className={`w-full max-w-xl relative mx-auto transition-all duration-300 ${
                searchFocus ? 'shadow-lg' : 'shadow-md'
              }`}
            >
              <div className={`bg-white rounded-full p-2 pl-6 flex items-center transition-all duration-300 ${
                searchFocus ? 'ring-2 ring-[#251c1a]' : ''
              }`}>
                <input
                  type="text"
                  placeholder="Search professionals, skills, industries..."
                  className="bg-transparent w-full py-3 outline-none text-[#251c1a] placeholder-[#251c1a]/50"
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setSearchFocus(false)}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                
                <button className={`ml-2 rounded-full p-4 flex items-center justify-center transition-all ${
                  searchFocus ? 'bg-[#251c1a] text-white' : 'bg-[#251c1a]/10 text-[#251c1a]'
                }`}>
                  <FaSearch className={`${searchFocus ? 'scale-110' : ''} transition-transform`} />
                </button>
              </div>
            </div>
            
            <div className="mt-4 text-[#251c1a]/60 text-sm">
              Try searching: "software engineers" or "marketing professionals"
            </div>
          </div>
          
          {/* Right side with network visualization */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px]">
              {/* Background circle */}
              <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full border-8 border-[#251c1a]/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Central node */}
              <div className="absolute left-1/2 top-[15%] h-[70%] w-4 sm:w-6 bg-[#251c1a] rounded-t-full transform -translate-x-1/2">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#251c1a] flex items-center justify-center">
                  <FaUsers className="text-[#f3eee5] text-lg sm:text-xl" />
                </div>
                
                <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#251c1a]/20 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30"></div>
              </div>
              
              {/* Network connections */}
              <div className="absolute top-[30%] left-1/2 w-[220px] sm:w-[320px] h-4 sm:h-6 bg-gradient-to-r from-[#251c1a] via-[#3a2e2b] to-[#251c1a] rounded-full transform -translate-x-1/2">
                {/* Left node */}
                <div className="absolute left-0 -bottom-[100px] sm:-bottom-[140px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full border-6 sm:border-8 border-[#251c1a]">
                  <div className="absolute inset-0 rounded-full bg-[#251c1a]/5 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-[#251c1a] text-2xl sm:text-3xl font-bold">PRO</div>
                    <div className="text-xs text-[#251c1a]/70 mt-1">Network</div>
                  </div>
                </div>
                
                {/* Right node */}
                <div className="absolute right-0 -bottom-[100px] sm:-bottom-[140px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full border-6 sm:border-8 border-[#251c1a]">
                  <div className="absolute inset-0 rounded-full bg-[#251c1a]/5 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-[#251c1a] text-2xl sm:text-3xl font-bold">GROW</div>
                    <div className="text-xs text-[#251c1a]/70 mt-1">Together</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative patterns */}
              <svg className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 text-[#251c1a]/10" viewBox="0 0 100 100">
                <path fill="currentColor" d="M0,0 L100,0 L100,100 Z" />
              </svg>
              <svg className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 text-[#251c1a]/10" viewBox="0 0 100 100">
                <path fill="currentColor" d="M0,100 L0,0 L100,100 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;