import React, { useState } from 'react';

const YouTubeEmbed = ({ videoId, title }) => (
  <div className="relative w-full h-48 bg-black rounded-lg overflow-hidden">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      className="w-full h-full"
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

const ShortsEmbed = ({ videoId, title }) => (
  <div className="flex flex-col items-center gap-4">
    <div className={`w-full max-w-lg bg-black rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl border-4 ${
      'border-green-500 hover:shadow-green-500/50'
    }`} style={{aspectRatio: '16/9'}}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      />
    </div>
    <p className="text-gray-400 text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Latest Upload 🎬</p>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen font-inter transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-yellow-50 via-white to-amber-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-50 shadow-lg transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-900/95 border-green-500/50 shadow-green-500/20' 
          : 'bg-white/90 border-yellow-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-colors duration-300 ${
              darkMode 
                ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500' 
                : 'bg-gradient-to-r from-yellow-400 to-amber-500'
            }`}>
              <i className="fas fa-video text-white text-lg"></i>
            </div>
            <span className={`text-xl font-bold bg-clip-text text-transparent transition-colors duration-300 ${
              darkMode 
                ? 'bg-gradient-to-r from-green-400 via-blue-400 to-purple-400' 
                : 'bg-gradient-to-r from-yellow-500 to-amber-600'
            }`}>
              VLG ARPIT
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className={`font-medium transition-colors duration-200 relative group ${
              darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-yellow-600'
            }`}>
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                darkMode ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-yellow-500'
              }`}></span>
            </a>
            <a href="#about" className={`font-medium transition-colors duration-200 relative group ${
              darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-yellow-600'
            }`}>
              About
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-yellow-500'
              }`}></span>
            </a>
            <a href="#videos" className={`font-medium transition-colors duration-200 relative group ${
              darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-yellow-600'
            }`}>
              Videos
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-500' : 'bg-yellow-500'
              }`}></span>
            </a>
            <a href="#contact" className={`font-medium transition-colors duration-200 relative group ${
              darkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-700 hover:text-yellow-600'
            }`}>
              Contact
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                darkMode ? 'bg-gradient-to-r from-pink-400 to-green-500' : 'bg-yellow-500'
              }`}></span>
            </a>
            
            {/* Theme Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-4 p-2 rounded-lg border transition-all duration-200 group ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 border-green-500 hover:border-green-400' 
                  : 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300 hover:border-yellow-500'
              }`}
            >
              {darkMode ? (
                <i className="fas fa-sun text-yellow-400 group-hover:text-yellow-300"></i>
              ) : (
                <i className="fas fa-moon text-gray-600 group-hover:text-gray-800"></i>
              )}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-all duration-200 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 border-gray-600' 
                  : 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300'
              }`}
            >
              {darkMode ? (
                <i className="fas fa-sun text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon text-gray-600"></i>
              )}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-all duration-200 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 border-gray-600' 
                  : 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300'
              }`}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden backdrop-blur-md border-t transition-colors duration-300 ${
            darkMode 
              ? 'bg-gray-900/98 border-gray-700' 
              : 'bg-white/95 border-yellow-200'
          }`}>
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className={`block font-medium py-2 transition-colors duration-200 ${
                darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-yellow-600'
              }`}>
                Home
              </a>
              <a href="#about" className={`block font-medium py-2 transition-colors duration-200 ${
                darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-yellow-600'
              }`}>
                About
              </a>
              <a href="#videos" className={`block font-medium py-2 transition-colors duration-200 ${
                darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-yellow-600'
              }`}>
                Videos
              </a>
              <a href="#contact" className={`block font-medium py-2 transition-colors duration-200 ${
                darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-yellow-600'
              }`}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-20 pb-16 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-green-900/10 to-gray-800' 
          : 'bg-gradient-to-br from-yellow-50 via-amber-50 to-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Profile Image and Text */}
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src="https://yt3.googleusercontent.com/2_8e2DBpQ9tqbpU9z4w8KegXoBQbsz-sUFoQ-M7f3qVRu2B-u_2YklQGEJRilmZGl_MW1yQ-=s160-c-k-c0x00ffffff-no-rj"
                  alt="Arpit Profile"
                  className={`w-48 h-48 rounded-full border-4 shadow-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'border-green-500 hover:shadow-green-500/50 hover:shadow-2xl' 
                      : 'border-yellow-400 hover:shadow-yellow-400/30'
                  }`}
                />
              </div>

              {/* Hero Text */}
              <div className="text-center lg:text-left">
                <div className={`inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                  darkMode ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-yellow-400 to-amber-500'
                }`}>
                  <i className="fab fa-youtube"></i>
                  YouTube
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  VLG <span className={darkMode ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent' : 'text-yellow-500'}>ARPIT</span>
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                    <i className="fab fa-youtube"></i>
                    <span className="font-bold">81K Subscribers</span>
                  </span>
                  <span className="text-gray-400 font-medium">@ARPITVLG-i7p</span>
                </div>
                <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Hi, I am Arpit! I create short video vlogs with funny content and entertainment. 
                  Quick, engaging videos that will make you laugh and brighten your day. Join my 81K+ community! 😁
                </p>
                <a
                  href="https://www.youtube.com/@ARPITVLG-i7p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    darkMode 
                      ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-green-500/50' 
                      : 'bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 hover:shadow-yellow-400/30'
                  }`}
                >
                  YT Link
                </a>
              </div>
            </div>

            {/* Right Column: YouTube Videos */}
            <div className="space-y-4 flex flex-col items-end justify-start">
              <ShortsEmbed videoId="W5KSC-5YPr0" title="Latest Upload" />
              <ShortsEmbed videoId="8T3zoVPnNCg" title="Popular Video" />
              <ShortsEmbed videoId="t78_PcfnarE" title="Extended Vlog" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-800 via-green-900/10 to-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className={`bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500' 
                : 'bg-gradient-to-r from-yellow-500 to-amber-600'
            }`}>VLG ARPIT</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className={`space-y-6 text-lg leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p>
                  Welcome to my channel! I'm Arpit, and I specialize in creating short video vlogs that pack maximum entertainment in minimum time. My bite-sized content is perfect for quick laughs and instant mood boosters.
                </p>
                <p>
                  Each short vlog is carefully crafted to deliver comedy, fun moments, and relatable content in under a minute. I believe in creating snackable content that fits perfectly into your busy day while bringing smiles and positive vibes.
                </p>
                <p>
                  Join our amazing community and help me reach my dream of 100K subscribers. If you enjoy my content, please subscribe and share the smiles! 😁
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className={`p-6 rounded-xl shadow-lg text-center border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-green-500 hover:border-green-400 hover:shadow-green-500/30' 
                  : 'bg-gradient-to-br from-yellow-50 to-white border-yellow-200 hover:border-yellow-400'
              }`}>
                <h3 className={`text-3xl font-bold mb-2 ${
                  darkMode ? 'text-green-400' : 'text-yellow-600'
                }`}>81K</h3>
                <p className={`font-medium transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Current Subscribers</p>
              </div>
              <div className={`p-6 rounded-xl shadow-lg text-center border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-blue-500 hover:border-blue-400 hover:shadow-blue-500/30' 
                  : 'bg-gradient-to-br from-yellow-50 to-white border-yellow-200 hover:border-yellow-400'
              }`}>
                <h3 className={`text-3xl font-bold mb-2 ${
                  darkMode ? 'text-blue-400' : 'text-yellow-600'
                }`}>15M+</h3>
                <p className={`font-medium transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Total Views</p>
              </div>
              <div className={`p-6 rounded-xl shadow-lg text-center border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-purple-500 hover:border-purple-400 hover:shadow-purple-500/30' 
                  : 'bg-gradient-to-br from-yellow-50 to-white border-yellow-200 hover:border-yellow-400'
              }`}>
                <h3 className={`text-3xl font-bold mb-2 ${
                  darkMode ? 'text-purple-400' : 'text-yellow-600'
                }`}>150+</h3>
                <p className={`font-medium transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Short Vlogs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-16 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900' : 'bg-gradient-to-br from-white via-yellow-50 to-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className={`bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500' 
                : 'bg-gradient-to-r from-yellow-500 to-amber-600'
            }`}>Experience</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-xl shadow-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-green-500 hover:border-green-400 hover:shadow-green-500/30' 
                : 'bg-white border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200/50'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                  darkMode ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-yellow-400 to-amber-500'
                }`}>
                  <i className="fab fa-youtube text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                    darkMode ? 'text-white group-hover:text-green-400' : 'text-gray-900 group-hover:text-yellow-600'
                  }`}>YouTube Creator</h3>
                  <p className={`font-semibold ${
                    darkMode ? 'text-green-400' : 'text-yellow-600'
                  }`}>3+ Years Experience</p>
                </div>
              </div>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Over 3 years of creating engaging short video content on YouTube. Specialized in mini vlogs with funny content that connects with audiences and builds community engagement.
              </p>
            </div>
            <div className={`p-8 rounded-xl shadow-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500 hover:border-purple-400 hover:shadow-purple-500/30' 
                : 'bg-white border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200/50'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                  darkMode ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600' : 'bg-gradient-to-r from-amber-400 to-yellow-500'
                }`}>
                  <i className="fas fa-cut text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                    darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-yellow-600'
                  }`}>CapCut Editor</h3>
                  <p className={`font-semibold ${
                    darkMode ? 'text-purple-400' : 'text-amber-600'
                  }`}>3+ Years Experience</p>
                </div>
              </div>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Expert in CapCut video editing with 3+ years of experience. Skilled in creating dynamic transitions, effects, and engaging short-form content optimized for social media platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Upload Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-yellow-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-5xl font-bold text-center mb-16 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Latest <span className={`bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500' 
                : 'bg-gradient-to-r from-yellow-500 to-amber-600'
            }`}>Short Videos</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <div className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-green-500 hover:border-green-400 hover:shadow-green-500/30' : 'bg-white border-yellow-200 hover:border-yellow-400'
            }`}>
              <div className="w-72 h-[450px] bg-black overflow-hidden">
                <iframe src="https://www.youtube.com/embed/HcYInG-I80U" title="Latest Short 1" className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-green-400' : 'text-gray-900'}`}>🔥 New Short!</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Fresh content just for you!</p>
                <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">NEW</span>
              </div>
            </div>
            <div className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-blue-500 hover:border-blue-400 hover:shadow-blue-500/30' : 'bg-white border-yellow-200 hover:border-yellow-400'
            }`}>
              <div className="w-72 h-[450px] bg-black overflow-hidden">
                <iframe src="https://www.youtube.com/embed/1EC3na202f8" title="Latest Short 2" className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900'}`}>🎬 Latest Short</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Amazing new content!</p>
                <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">NEW</span>
              </div>
            </div>
            <div className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500 hover:border-purple-400 hover:shadow-purple-500/30' : 'bg-white border-yellow-200 hover:border-yellow-400'
            }`}>
              <div className="w-72 h-[450px] bg-black overflow-hidden">
                <iframe src="https://www.youtube.com/embed/naLKXuigZOQ" title="Latest Short 3" className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900'}`}>🆕 Recent Upload</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Fresh short video!</p>
                <span className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">NEW</span>
              </div>
            </div>
            <div className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-pink-500 hover:border-pink-400 hover:shadow-pink-500/30' : 'bg-white border-yellow-200 hover:border-yellow-400'
            }`}>
              <div className="w-72 h-[450px] bg-black overflow-hidden">
                <iframe src="https://www.youtube.com/embed/uZviNoz1V0w" title="Latest Short 4" className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-pink-400' : 'text-gray-900'}`}>✨ New Content</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Brand new short video!</p>
                <span className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">NEW</span>
              </div>
            </div>
            <div className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-500 hover:border-cyan-400 hover:shadow-cyan-500/30' : 'bg-white border-yellow-200 hover:border-yellow-400'
            }`}>
              <div className="w-72 h-[450px] bg-black overflow-hidden">
                <iframe src="https://www.youtube.com/embed/xPjd7RUW4BQ" title="Latest Short 5" className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-cyan-400' : 'text-gray-900'}`}>🎥 Latest Upload</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Newest short content!</p>
                <span className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">NEW</span>
              </div>
            </div>
            <div className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-indigo-500 hover:border-indigo-400 hover:shadow-indigo-500/30' : 'bg-white border-yellow-200 hover:border-yellow-400'
            }`}>
              <div className="w-72 h-[450px] bg-black overflow-hidden">
                <iframe src="https://www.youtube.com/embed/GmbW5t-QJVQ" title="Latest Short 6" className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-indigo-400' : 'text-gray-900'}`}>🌟 Fresh Short</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>New engaging content!</p>
                <span className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">NEW</span>
              </div>
            </div>
            <div className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-teal-500 hover:border-teal-400 hover:shadow-teal-500/30' : 'bg-white border-yellow-200 hover:border-yellow-400'
            }`}>
              <div className="w-72 h-[450px] bg-black overflow-hidden">
                <iframe src="https://www.youtube.com/embed/FBsBEdBAgBo" title="Latest Short 7" className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-teal-400' : 'text-gray-900'}`}>💫 Recent Video</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Latest short upload!</p>
                <span className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">NEW</span>
              </div>
            </div>
            <div className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500 hover:border-orange-400 hover:shadow-orange-500/30' : 'bg-white border-yellow-200 hover:border-yellow-400'
            }`}>
              <div className="w-72 h-[450px] bg-black overflow-hidden">
                <iframe src="https://www.youtube.com/embed/2llPYIEhFbQ" title="Latest Short 8" className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-orange-400' : 'text-gray-900'}`}>🎯 New Video</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Fresh short content!</p>
                <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">NEW</span>
              </div>
            </div>
            <div className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-rose-500 hover:border-rose-400 hover:shadow-rose-500/30' : 'bg-white border-yellow-200 hover:border-yellow-400'
            }`}>
              <div className="w-72 h-[450px] bg-black overflow-hidden">
                <iframe src="https://www.youtube.com/embed/s8UDJYJhtUs" title="Latest Short 9" className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-rose-400' : 'text-gray-900'}`}>⚡ Latest Short</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Newest upload here!</p>
                <span className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">NEW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section id="videos" className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-green-900/10 to-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-5xl font-bold text-center mb-16 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Popular <span className={`bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500' 
                : 'bg-gradient-to-r from-yellow-500 to-amber-600'
            }`}>Short Vlogs</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            <div className={`w-72 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-green-500 hover:border-green-400 hover:shadow-green-500/30' 
                : 'bg-white border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200/30'
            }`}>
              <div className="w-full h-[450px] bg-black overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/sIcWAn3LWks"
                  title="Viral Hit - 10M Views"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-green-400' : 'text-gray-900 group-hover:text-yellow-600'
                }`}>Viral Hit - 10M Views! 🔥</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>My most popular short video that went viral!</p>
              </div>
            </div>
            <div className={`w-64 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-blue-500 hover:border-blue-400 hover:shadow-blue-500/30' 
                : 'bg-white border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200/30'
            }`}>
              <div className="w-full h-96 bg-black rounded-t-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/3fLPpYpy5_c"
                  title="Comedy Gold - Second Hit"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-yellow-600'
                }`}>Comedy Gold - Second Hit</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Fan favorite showcasing my funny content style.</p>
              </div>
            </div>
            <div className={`w-64 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500 hover:border-purple-400 hover:shadow-purple-500/30' 
                : 'bg-white border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200/30'
            }`}>
              <div className="w-full h-96 bg-black rounded-t-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/aSIZ7GAoONs"
                  title="Trending Mini Vlog"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-yellow-600'
                }`}>Trending Mini Vlog</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Top performing short vlog with great engagement.</p>
              </div>
            </div>
            <div className={`w-64 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-pink-500 hover:border-pink-400 hover:shadow-pink-500/30' 
                : 'bg-white border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200/30'
            }`}>
              <div className="w-full h-96 bg-black rounded-t-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/JjAtAU_ysHQ"
                  title="Latest Short Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-pink-400' : 'text-gray-900 group-hover:text-yellow-600'
                }`}>Latest Short Video</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>My newest short content with amazing engagement.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Krishna Videos Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-orange-900/10 to-gray-900' : 'bg-gradient-to-br from-white via-amber-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-5xl font-bold text-center mb-6 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Krishna Murti <span className={`bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400' 
                : 'bg-gradient-to-r from-amber-500 to-yellow-600'
            }`}>Making Series</span>
          </h2>
          <p className={`text-center mb-12 text-lg transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>4-day journey of creating a beautiful Krishna Murti</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <div className={`w-72 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500 hover:border-orange-400 hover:shadow-orange-500/30' 
                : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-amber-200/30'
            }`}>
              <div className="w-full h-[450px] bg-black overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/1DQpgqYZDlo"
                  title="Krishna Murti Day 1"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-orange-400' : 'text-gray-900 group-hover:text-amber-600'
                }`}>Day 1 - Beginning</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Starting the Krishna Murti creation process.</p>
              </div>
            </div>
            
            <div className={`w-64 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500/50' 
                : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-amber-200/30'
            }`}>
              <div className="w-full h-96 bg-black rounded-t-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/nHKc_9Sk33k"
                  title="Krishna Murti Day 2"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-orange-400' : 'text-gray-900 group-hover:text-amber-600'
                }`}>Day 2 - Progress</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Continuing the detailed work on Krishna.</p>
              </div>
            </div>
            
            <div className={`w-64 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500/50' 
                : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-amber-200/30'
            }`}>
              <div className="w-full h-96 bg-black rounded-t-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/R4SboHD_VbU"
                  title="Krishna Murti Day 3"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-orange-400' : 'text-gray-900 group-hover:text-amber-600'
                }`}>Day 3 - Details</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Adding intricate details and features.</p>
              </div>
            </div>
            
            <div className={`w-64 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500/50' 
                : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-amber-200/30'
            }`}>
              <div className="w-full h-96 bg-black rounded-t-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/RWed7aC4COU"
                  title="Krishna Murti Day 4"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-orange-400' : 'text-gray-900 group-hover:text-amber-600'
                }`}>Day 4 - Completion</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Final touches and completed Krishna Murti.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long Videos Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-800 via-cyan-900/10 to-gray-800' : 'bg-yellow-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-5xl font-bold text-center mb-16 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Long <span className={`bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500' 
                : 'bg-gradient-to-r from-yellow-500 to-amber-600'
            }`}>Videos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-500 hover:border-cyan-400 hover:shadow-cyan-500/30' 
                : 'bg-white border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200/30'
            }`}>
              <div className="relative w-full bg-black rounded-t-xl overflow-hidden" style={{paddingBottom: '56.25%'}}>
                <iframe
                  src="https://www.youtube.com/embed/W5KSC-5YPr0"
                  title="Long Video 1"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-yellow-600'
                }`}>Featured Long Video</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Extended content with in-depth storytelling.</p>
              </div>
            </div>
            
            <div className={`rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-blue-500 hover:border-blue-400 hover:shadow-blue-500/30' 
                : 'bg-white border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200/30'
            }`}>
              <div className="relative w-full bg-black rounded-t-xl overflow-hidden" style={{paddingBottom: '56.25%'}}>
                <iframe
                  src="https://www.youtube.com/embed/8T3zoVPnNCg"
                  title="Long Video 2"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-yellow-600'
                }`}>Popular Long Form</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Full-length video with amazing content.</p>
              </div>
            </div>
            
            <div className={`rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border group ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-indigo-500 hover:border-indigo-400 hover:shadow-indigo-500/30' 
                : 'bg-white border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200/30'
            }`}>
              <div className="relative w-full bg-black rounded-t-xl overflow-hidden" style={{paddingBottom: '56.25%'}}>
                <iframe
                  src="https://www.youtube.com/embed/t78_PcfnarE"
                  title="Long Video 3"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-yellow-600'
                }`}>Extended Vlog</h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Detailed long-form content for deeper engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's <span className={`bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500' 
                : 'bg-gradient-to-r from-yellow-500 to-amber-600'
            }`}>Connect</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Inquiry</h3>
              <p className="text-gray-300 mb-6">
                For business inquiries, collaborations, or sponsorships, feel free to contact me. Let's create something amazing together!
              </p>
              <div className="flex items-center gap-3 mb-6">
                <i className="fas fa-envelope text-indigo-600"></i>
                <a href="mailto:arpit40357@gmail.com" className="text-gray-300 hover:text-red-500">
                  arpit40357@gmail.com
                </a>
              </div>
              <div className="flex gap-4 mb-6">
                <a href="https://www.youtube.com/@ARPITVLG-i7p" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="text-center">
                <a
                  href="https://www.youtube.com/@ARPITVLG-i7p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    darkMode 
                      ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-green-500/50' 
                      : 'bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 hover:shadow-yellow-400/30'
                  }`}
                >
                  <i className="fab fa-youtube text-xl"></i>
                  Visit My Channel
                </a>
              </div>
            </div>
            <form className={`p-8 rounded-xl shadow-xl border transition-all duration-300 ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600' 
                : 'bg-gradient-to-br from-yellow-50 to-white border-yellow-200'
            }`}>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                    darkMode 
                      ? 'border-gray-500 bg-gray-800 text-white focus:bg-gray-700' 
                      : 'border-gray-300 bg-white text-gray-900 focus:bg-gray-50'
                  }`}
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                    darkMode 
                      ? 'border-gray-500 bg-gray-800 text-white focus:bg-gray-700' 
                      : 'border-gray-300 bg-white text-gray-900 focus:bg-gray-50'
                  }`}
                  required
                />
              </div>
              <div className="mb-6">
                <select className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                  darkMode 
                    ? 'border-gray-500 bg-gray-800 text-white focus:bg-gray-700' 
                    : 'border-gray-300 bg-white text-gray-900 focus:bg-gray-50'
                }`} required>
                  <option value="">Select Subject</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                    darkMode 
                      ? 'border-gray-500 bg-gray-800 text-white focus:bg-gray-700' 
                      : 'border-gray-300 bg-white text-gray-900 focus:bg-gray-50'
                  }`}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-green-500/50' 
                    : 'bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 hover:shadow-yellow-400/30'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 text-white' : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 VLG ARPIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;