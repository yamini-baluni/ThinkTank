import React, { useEffect, useState, useRef } from 'react';
import { FaSearch, FaUsers, FaNetworkWired, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const searchRef = useRef(null);

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-20 sm:py-32 relative overflow-hidden" style={{ backgroundColor: '#f3eee5' }}>
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYuMjUgMzUuMjVhMi4yNSAyLjI1IDAgMTAwLTQuNSAyLjI1IDIuMjUgMCAwMDAgNC41eiIgZmlsbD0iIzI1MWMxYSIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#251c1a]/5 via-transparent to-[#3a2e2b]/5"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side with logo and text */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            <div className="mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#251c1a] via-[#3a2e2b] to-[#251c1a] bg-clip-text text-transparent relative inline-block">
                  U
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-[#251c1a]/20 via-[#3a2e2b]/20 to-[#251c1a]/20 blur-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
                <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#251c1a] via-[#3a2e2b] to-[#251c1a] bg-clip-text text-transparent relative inline-block">
                  dyam
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-[#251c1a]/20 via-[#3a2e2b]/20 to-[#251c1a]/20 blur-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                  />
                </span>
              </motion.h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-[#251c1a] via-[#3a2e2b] to-[#251c1a] my-4 mx-auto relative"
              >
                <motion.div
                  className="absolute inset-0 bg-white/50"
                  animate={{
                    x: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-[#251c1a]/80 text-xl md:text-2xl font-light italic relative"
              >
                Connect. Collaborate. Grow.
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-[#251c1a]/10 via-[#3a2e2b]/10 to-[#251c1a]/10 blur-lg"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.p>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-[#251c1a]/70 text-lg mb-8 max-w-lg mx-auto relative"
            >
              Join a thriving community of professionals. Connect with experts, 
              share knowledge, and advance your career through meaningful connections.
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-[#251c1a]/5 via-[#3a2e2b]/5 to-[#251c1a]/5 blur-lg"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              ref={searchRef}
              className={`w-full max-w-xl relative mx-auto transition-all duration-300 ${
                searchFocus ? 'shadow-lg' : 'shadow-md'
              }`}
            >
              <div className={`bg-white/90 backdrop-blur-sm rounded-full p-2 pl-6 flex items-center transition-all duration-300 ${
                searchFocus ? 'ring-2 ring-[#251c1a] shadow-xl' : ''
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
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`ml-2 rounded-full p-4 flex items-center justify-center transition-all ${
                    searchFocus ? 'bg-[#251c1a] text-white' : 'bg-[#251c1a]/10 text-[#251c1a]'
                  }`}
                >
                  <FaSearch className={`${searchFocus ? 'scale-110' : ''} transition-transform`} />
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-4 text-[#251c1a]/60 text-sm flex items-center justify-center gap-2"
            >
              Try searching: 
              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                "software engineers"
              </motion.span>
              or
              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                "marketing professionals"
              </motion.span>
            </motion.div>
          </div>
          
          {/* Right side with network visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center items-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px]">
              {/* Animated background circle */}
              <motion.div 
                className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full border-8 border-[#251c1a]/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Central node with enhanced animation */}
              <div className="absolute left-1/2 top-[15%] h-[70%] w-4 sm:w-6 bg-[#251c1a] rounded-t-full transform -translate-x-1/2">
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#251c1a] flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(37, 28, 26, 0.4)",
                      "0 0 0 20px rgba(37, 28, 26, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaUsers className="text-[#f3eee5] text-lg sm:text-xl" />
                </motion.div>
                
                <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#251c1a]/20 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30"></div>
              </div>
              
              {/* Network connections with enhanced gradient */}
              <div className="absolute top-[30%] left-1/2 w-[220px] sm:w-[320px] h-4 sm:h-6 bg-gradient-to-r from-[#251c1a] via-[#3a2e2b] to-[#251c1a] rounded-full transform -translate-x-1/2">
                {/* Left node with hover effect */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-0 -bottom-[100px] sm:-bottom-[140px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full border-6 sm:border-8 border-[#251c1a] cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-full bg-[#251c1a]/5 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-[#251c1a] text-2xl sm:text-3xl font-bold">PRO</div>
                    <div className="text-xs text-[#251c1a]/70 mt-1">Network</div>
                  </div>
                </motion.div>
                
                {/* Right node with hover effect */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="absolute right-0 -bottom-[100px] sm:-bottom-[140px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full border-6 sm:border-8 border-[#251c1a] cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-full bg-[#251c1a]/5 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-[#251c1a] text-2xl sm:text-3xl font-bold">GROW</div>
                    <div className="text-xs text-[#251c1a]/70 mt-1">Together</div>
                  </div>
                </motion.div>
              </div>
              
              {/* Enhanced decorative patterns */}
              <motion.svg 
                className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 text-[#251c1a]/10" 
                viewBox="0 0 100 100"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <path fill="currentColor" d="M0,0 L100,0 L100,100 Z" />
              </motion.svg>
              <motion.svg 
                className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 text-[#251c1a]/10" 
                viewBox="0 0 100 100"
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <path fill="currentColor" d="M0,100 L0,0 L100,100 Z" />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;