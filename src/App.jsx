import React, { useState, useEffect, useRef } from 'react';

// ─── YouTube API Config ───────────────────────────────────────────────────────
// 🔑 Replace with your YouTube Data API v3 key from console.cloud.google.com
const YT_API_KEY = 'YOUR_YOUTUBE_API_KEY_HERE';
const CHANNEL_ID = 'UCWJLkpS3FNzUEz2bFVGEj3A';

// ─── Static fallback data ─────────────────────────────────────────────────────
const STATIC_STATS = { subscribers: '94K', views: '40.7M', videos: '223' };
const STATIC_SHORTS = [
  { id: 'qs7tUK14has', title: 'Latest Short' },
  { id: 'gRcAiXjLsmI', title: 'Short Video #2' },
  { id: 'zswNZlJHDv0', title: 'Short Video #3' },
  { id: 'CDgGj5ORYcc', title: 'Short Video #4' },
  { id: 'EiAUT0W8jjE', title: 'Short Video #5' },
  { id: 'a2lcvYkKuWU', title: 'Short Video #6' },
  { id: 'APXk9YdYSAs', title: 'Short Video #7' },
  { id: 'P1v3FEIotBc', title: 'Short Video #8' },
  { id: '-QwIR5StZlk', title: 'Short Video #9' },
  { id: '6UVXY-qA1cM', title: 'Short Video #10' },
  { id: 'mwH-ogs851E', title: 'Short Video #11' },
  { id: 'u6jTMncJ4Yg', title: 'Short Video #12' },
  { id: '8ImkPlFvE7s', title: 'Short Video #13' },
  { id: '0cA1oLnao7k', title: 'Short Video #14' },
  { id: 'ry-JZjsuLnM', title: 'Short Video #15' },
  { id: 'OFCT49ow-ZM', title: 'Short Video #16' },
  { id: '69R01bQ7mPY', title: 'Short Video #17' },
  { id: 'lb4S-48d3wc', title: 'Short Video #18' },
  { id: 'i6WwI-lLsY4', title: 'Short Video #19' },
  { id: '0qCmL9pbl0E', title: 'Short Video #20' },
];
const POPULAR_VIDEOS = [
  { id: 'sIcWAn3LWks', title: 'Viral Hit – 10M Views 🔥', desc: 'My most popular short that went viral!' },
  { id: '3fLPpYpy5_c', title: 'Comedy Gold',              desc: 'Fan favourite comedy short.' },
  { id: 'aSIZ7GAoONs', title: 'Trending Mini Vlog',       desc: 'Top performing vlog.' },
  { id: 'JjAtAU_ysHQ', title: 'Latest Short',             desc: 'Amazing engagement!' },
  { id: 'bofK-aJLWyE', title: 'Popular Hit',              desc: 'Trending entertainment content.' },
  { id: 'eRUCjgkulVw', title: 'Fan Favorite',             desc: 'Highly engaging short.' },
  { id: 'lb4S-48d3wc', title: 'Comedy Moment',            desc: 'Hilarious vlog moment.' },
  { id: 'WwFzjFSu8K0', title: 'Entertainment Gold',       desc: 'Amazing viewer response!' },
];
const KRISHNA_SERIES = [
  { id: '1DQpgqYZDlo', title: 'Day 1 – Beginning', desc: 'Starting the Krishna Murti process.' },
  { id: 'nHKc_9Sk33k', title: 'Day 2 – Progress',  desc: 'Continuing the detailed work.' },
  { id: 'R4SboHD_VbU', title: 'Day 3 – Details',   desc: 'Adding intricate details.' },
  { id: 'RWed7aC4COU', title: 'Day 4 – Completion', desc: 'Final touches & completed.' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmt(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1_000)     return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  return String(n);
}

// ─── Sub-components ───────────────────────────────────────────────────────────
const StatPill = ({ value, label, icon, dark }) => (
  <div className={`stat-pill flex-1 min-w-[70px] sm:min-w-[90px] rounded-2xl p-2.5 sm:p-4 text-center border transition-all duration-300 hover:-translate-y-1 ${
    dark ? 'bg-white/5 border-white/10 hover:border-red-500/40' : 'bg-white border-gray-200 hover:border-red-300 shadow-sm'
  }`}>
    <p className={`text-xl sm:text-2xl font-black mb-0.5 ${dark ? 'text-white' : 'text-gray-900'}`}>{value}</p>
    <p className={`text-[10px] sm:text-xs font-semibold tracking-wide uppercase ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>
  </div>
);

const ShortCard = ({ videoId, title, isNew, dark }) => (
  <div className={`short-card group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
    dark ? 'bg-[#111] border-white/8 hover:border-red-500/50 hover:shadow-red-500/10'
          : 'bg-white border-gray-200 hover:border-red-300 hover:shadow-red-100'
  }`}>
    <div className="relative w-full aspect-[9/16] bg-black overflow-hidden">
      {isNew && (
        <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full tracking-wider">
          NEW
        </span>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
    <div className="px-3 py-2.5">
      <p className={`text-xs font-semibold truncate ${dark ? 'text-gray-300' : 'text-gray-700'}`}>{title}</p>
    </div>
  </div>
);

const VideoCard = ({ id, title, desc, dark, accent = 'red' }) => (
  <div className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
    dark
      ? `bg-[#111] border-white/8 hover:border-${accent}-500/40 hover:shadow-${accent}-500/10`
      : `bg-white border-gray-200 hover:border-${accent}-300`
  }`}>
    <div className="h-72 bg-black overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0`}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <h3 className={`font-bold text-sm mb-1 transition-colors ${
        dark ? `text-white group-hover:text-${accent}-400` : 'text-gray-900'
      }`}>{title}</h3>
      <p className={`text-xs leading-relaxed ${dark ? 'text-gray-500' : 'text-gray-500'}`}>{desc}</p>
    </div>
  </div>
);

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark]               = useState(true);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [stats, setStats]             = useState(null);
  const [latestVideos, setLatest]     = useState([]);
  const [apiStatus, setApiStatus]     = useState('loading');
  const [formData, setFormData]       = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus]   = useState('idle');

  // Scroll shadow
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Section reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Live YouTube API
  useEffect(() => {
    if (!YT_API_KEY || YT_API_KEY === 'YOUR_YOUTUBE_API_KEY_HERE') {
      setApiStatus('no-key'); return;
    }
    const ctrl = new AbortController();
    (async () => {
      try {
        const [chRes, vidRes] = await Promise.all([
          fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YT_API_KEY}`, { signal: ctrl.signal }),
          fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=9&order=date&type=video&key=${YT_API_KEY}`, { signal: ctrl.signal }),
        ]);
        const [chJson, vidJson] = await Promise.all([chRes.json(), vidRes.json()]);
        if (chJson.items?.length) {
          const s = chJson.items[0].statistics;
          setStats({ subscribers: fmt(+s.subscriberCount), views: fmt(+s.viewCount), videos: fmt(+s.videoCount) });
        }
        if (vidJson.items?.length) {
          setLatest(vidJson.items.map((item, i) => ({
            id: item.id.videoId, title: item.snippet.title, isNew: i < 3,
          })));
        }
        setApiStatus('ok');
      } catch (e) {
        if (e.name !== 'AbortError') setApiStatus('error');
      }
    })();
    return () => ctrl.abort();
  }, []);

  const displayStats  = stats || STATIC_STATS;
  const displayShorts = latestVideos.length
    ? latestVideos.map((v, i) => ({ ...v, isNew: i < 3 }))
    : STATIC_SHORTS.map((v, i) => ({ ...v, isNew: i < 3 }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => { setFormStatus('sent'); setFormData({ name: '', email: '', subject: '', message: '' }); }, 1200);
  };

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-[#0a0a0a] text-white' : 'bg-[#f9f8f6] text-gray-900'}`}>

      {/* ── NAV ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 h-14 sm:h-16 flex items-center transition-all duration-300 ${
        scrolled
          ? dark ? 'bg-black/90 backdrop-blur-xl border-b border-white/8 shadow-xl shadow-black/60'
                 : 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-md'
          : 'bg-transparent'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-2.5 group">
            <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform flex-shrink-0">
              <i className="fab fa-youtube text-white text-xs sm:text-sm" />
            </div>
            <span className={`font-black text-xs sm:text-base tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
              VLG <span className="text-red-500">ARPIT</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {['Home','About','Shorts','Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className={`nav-link px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  dark ? 'text-gray-400 hover:text-white hover:bg-white/8' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}>{l}</a>
            ))}
            <a href="https://www.youtube.com/@ARPITVLG-i7p" target="_blank" rel="noopener noreferrer"
              className="ml-3 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95">
              <i className="fab fa-youtube" /> Subscribe
            </a>
            <a href="https://instagram.com/arpit_ty01?igsh=MTQ1OHJoM2FxYW1zOA==" target="_blank" rel="noopener noreferrer"
              className="ml-2 w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white hover:scale-110 transition-all shadow-lg">
              <i className="fab fa-instagram text-sm" />
            </a>
            <a href="https://facebook.com/share/1CZ4q6ryC2" target="_blank" rel="noopener noreferrer"
              className="ml-2 w-9 h-9 rounded-xl flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white hover:scale-110 transition-all shadow-lg">
              <i className="fab fa-facebook-f text-sm" />
            </a>
            <button onClick={() => setDark(!dark)}
              className={`ml-1.5 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                dark ? 'bg-white/8 hover:bg-white/12 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
              }`}>
              <i className={`fas ${dark ? 'fa-sun' : 'fa-moon'} text-sm`} />
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-1.5">
            <button onClick={() => setDark(!dark)} className={`w-10 h-10 rounded-xl flex items-center justify-center ${dark ? 'bg-white/8 text-yellow-400' : 'bg-gray-200 text-gray-600'}`}>
              <i className={`fas ${dark ? 'fa-sun' : 'fa-moon'} text-sm`} />
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`w-10 h-10 rounded-xl flex items-center justify-center ${dark ? 'bg-white/8 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-sm`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className={`absolute top-14 sm:top-16 inset-x-0 md:hidden border-b px-4 py-3 space-y-1 ${dark ? 'bg-black/96 border-white/8' : 'bg-white border-gray-200'}`}>
            {['Home','About','Shorts','Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className={`flex items-center px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${dark ? 'text-gray-300 hover:text-white hover:bg-white/8' : 'text-gray-700 hover:bg-gray-100'}`}>
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-1 absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-red-600/10 blur-3xl" />
          <div className="blob-2 absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-orange-500/8 blur-3xl" />
          <div className="blob-3 absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-red-800/8 blur-3xl" />
        </div>

        {/* Channel banner faint strip */}
        <div className="absolute top-16 inset-x-0 h-44 overflow-hidden opacity-20 pointer-events-none">
          <img src="https://yt3.googleusercontent.com/Juq8ug22QpLlz2-FfYFzVuNsCueD0A_S91L0ASAAo-5zpzOt3f9AxxFiMMko12JTpCaMZ2Mk=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            alt="" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-b from-transparent to-[#0a0a0a]' : 'bg-gradient-to-b from-transparent to-[#f9f8f6]'}`} />
        </div>

        <div className="hero-content relative max-w-7xl mx-auto px-5 py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
          {/* Left */}
          <div className="space-y-6 md:space-y-8">
            {/* Live indicator */}
            {apiStatus === 'ok' && (
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE DATA
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <div className="avatar-wrap relative flex-shrink-0">
                <img src="https://yt3.googleusercontent.com/GhOcvGVWm2VzypcTloTHLKYZ9Xj1aWjGixrMl5NpyR_c7qpOKxxwSKyvhrNR7fMjVg-qeX9AtG4=s160-c-k-c0x00ffffff-no-rj"
                  alt="Arpit" className="w-16 sm:w-[72px] h-16 sm:h-[72px] rounded-full border-2 border-red-500 relative z-10" />
              </div>
              <div>
                <h1 className={`text-3xl sm:text-5xl md:text-6xl font-black leading-tight sm:leading-none tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
                  VLG <span className="text-red-500">ARPIT</span>
                </h1>
                <p className={`text-xs sm:text-sm font-medium mt-1 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>@ARPITVLG-i7p</p>
              </div>
            </div>

            <p className={`text-base sm:text-lg leading-relaxed max-w-md ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              Short video vlogs packed with funny content &amp; entertainment — quick, engaging videos that brighten your day. 😁
            </p>

            {/* Stats */}
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3">
              <StatPill value={displayStats.subscribers} label="Subscribers" dark={dark} />
              <StatPill value={displayStats.views}        label="Total Views"  dark={dark} />
              <StatPill value={displayStats.videos}       label="Videos"       dark={dark} />
            </div>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3">
              <a href="https://www.youtube.com/@ARPITVLG-i7p" target="_blank" rel="noopener noreferrer"
                className="cta-primary inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-xl shadow-red-600/25 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base">
                <i className="fab fa-youtube text-lg" /> Subscribe on YouTube
              </a>
              <a href="#shorts"
                className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold border-2 transition-all hover:scale-105 text-sm sm:text-base ${
                  dark ? 'border-white/15 text-white hover:border-red-500 hover:bg-red-500/8' : 'border-gray-300 text-gray-800 hover:border-red-400'
                }`}>
                <i className="fas fa-play text-red-500 text-sm" /> Watch Videos
              </a>
            </div>
          </div>

          {/* Right: featured video */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="featured-video relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute inset-0 rounded-3xl blur-3xl scale-90 bg-red-600/20" />
              <div className={`relative rounded-3xl overflow-hidden border shadow-2xl ${dark ? 'border-white/10' : 'border-gray-300'}`}
                style={{ aspectRatio: '9/16' }}>
                <iframe src="https://www.youtube.com/embed/qs7tUK14has?rel=0" title="Latest Upload"
                  className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold text-white bg-red-600 shadow-lg">
                🎬 Latest Upload
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
          <i className={`fas fa-chevron-down text-xs ${dark ? 'text-gray-600' : 'text-gray-400'}`} />
        </div>
      </section>


      {/* ── ABOUT ── */}
      <section id="about" className={`py-16 sm:py-20 md:py-28 reveal ${dark ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-red-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-2 sm:mb-3">About Me</p>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${dark ? 'text-white' : 'text-gray-900'}`}>
              Who is VLG <span className="text-red-500">Arpit?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center">
            <div className="space-y-4 sm:space-y-5">
              {[
                "Welcome! I'm Arpit — I specialize in short video vlogs packed with maximum entertainment in minimum time. My bite-sized content is perfect for quick laughs and instant mood boosters.",
                "Each short is carefully crafted to deliver comedy, fun moments, and relatable content in under a minute. Snackable videos that fit perfectly into your busy day.",
                "Join our amazing community and help me reach 100K subscribers! If you enjoy my content, please subscribe and share the smiles! 😁",
              ].map((t, i) => (
                <p key={i} className={`text-sm sm:text-base leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{t}</p>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: 'fa-youtube', title: 'YouTube Creator', sub: '3+ Years Experience', desc: 'Over 3 years creating engaging short-form content — mini vlogs with funny moments that build real community.', color: 'bg-red-600' },
                { icon: 'fa-cut',     title: 'CapCut Editor',   sub: '3+ Years Experience', desc: 'Expert in CapCut — dynamic transitions, trending effects, and short-form content optimised for every platform.', color: 'bg-orange-500' },
              ].map(c => (
                <div key={c.title} className={`p-4 sm:p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl ${
                  dark ? 'bg-white/4 border-white/8 hover:border-red-500/30' : 'bg-gray-50 border-gray-200 hover:border-red-200'
                }`}>
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <div className={`w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${c.color} shadow-lg`}>
                      <i className={`fas ${c.icon} text-white text-sm`} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm sm:text-base ${dark ? 'text-white' : 'text-gray-900'}`}>{c.title}</h3>
                      <p className="text-red-500 text-xs font-semibold">{c.sub}</p>
                    </div>
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${dark ? 'text-gray-500' : 'text-gray-600'}`}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST SHORTS ── */}
      <section id="shorts" className={`py-16 sm:py-20 md:py-28 reveal ${dark ? 'bg-[#0a0a0a]' : 'bg-[#f9f8f6]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-red-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-2 sm:mb-3">
              {apiStatus === 'ok' ? '🔴 Live from YouTube' : 'Videos'}
            </p>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${dark ? 'text-white' : 'text-gray-900'}`}>
              Latest <span className="text-red-500">Short Videos</span>
            </h2>
            {apiStatus === 'ok' && (
              <p className={`mt-2 sm:mt-3 text-xs sm:text-sm ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                Auto-updates when you upload a new video ✨
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {displayShorts.map(v => (
              <ShortCard key={v.id} videoId={v.id} title={v.title} isNew={v.isNew} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR VLOGS ── */}
      <section className={`py-16 sm:py-20 md:py-28 reveal ${dark ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-red-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-2 sm:mb-3">Hall of Fame</p>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${dark ? 'text-white' : 'text-gray-900'}`}>
              Popular <span className="text-red-500">Short Vlogs</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {POPULAR_VIDEOS.map(v => (
              <ShortCard key={v.id} videoId={v.id} title={v.title} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ── KRISHNA SERIES ── */}
      <section className={`py-16 sm:py-20 md:py-28 reveal ${dark ? 'bg-[#0a0a0a]' : 'bg-[#f9f8f6]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-amber-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-2 sm:mb-3">4-Day Journey</p>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${dark ? 'text-white' : 'text-gray-900'}`}>
              Krishna Murti <span className="text-amber-500">Making Series</span>
            </h2>
            <p className={`mt-2 sm:mt-3 text-xs sm:text-sm ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
              A beautiful 4-day journey of creating a Krishna Murti from scratch
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {KRISHNA_SERIES.map((v, i) => (
              <div key={v.id} className="relative">
                <div className={`absolute top-2 left-2 z-10 w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg ${
                  ['bg-amber-400','bg-amber-500','bg-amber-600','bg-amber-700'][i]
                }`}>{i + 1}</div>
                <ShortCard videoId={v.id} title={v.title} dark={dark} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className={`py-16 sm:py-20 md:py-28 reveal ${dark ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-red-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-2 sm:mb-3">Get In Touch</p>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${dark ? 'text-white' : 'text-gray-900'}`}>
              Let's <span className="text-red-500">Connect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Info */}
            <div className="space-y-4 sm:space-y-6">
              <p className={`text-sm sm:text-base leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                For collaborations, sponsorships, or general inquiries — feel free to reach out. Let's create something amazing together!
              </p>
              <a href="mailto:gamingwithyou878@gmail.com"
                className={`flex items-center gap-3 p-3 sm:p-4 rounded-2xl border transition-all hover:-translate-y-0.5 ${
                  dark ? 'bg-white/4 border-white/8 hover:border-red-500/30' : 'bg-gray-50 border-gray-200 hover:border-red-200'
                }`}>
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white text-xs sm:text-sm" />
                </div>
                <div>
                  <p className={`text-[10px] sm:text-xs font-medium ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Email</p>
                  <p className={`font-semibold text-xs sm:text-sm ${dark ? 'text-white' : 'text-gray-900'}`}>gamingwithyou878@gmail.com</p>
                </div>
              </a>
              <div className="flex gap-3">
                {[
                  { href: 'https://www.youtube.com/@ARPITVLG-i7p', icon: 'fa-youtube', cls: 'bg-red-600 hover:bg-red-700 shadow-red-600/25' },
                  { href: 'https://instagram.com/arpit_ty01?igsh=MTQ1OHJoM2FxYW1zOA==', icon: 'fa-instagram', cls: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400' },
                  { href: 'https://facebook.com/share/1CZ4q6ryC2', icon: 'fa-facebook', cls: 'bg-blue-600 hover:bg-blue-700' },
                  { href: '#', icon: 'fa-x-twitter', cls: `${dark ? 'bg-white/10 border border-white/15 hover:bg-white/15' : 'bg-gray-900 hover:bg-black'}` },
                ].map(s => (
                  <a key={s.icon} href={s.href} target={s.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg ${s.cls}`}>
                    <i className={`fab ${s.icon} text-xs sm:text-sm`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className={`p-5 sm:p-6 md:p-7 rounded-2xl border ${dark ? 'bg-white/4 border-white/8' : 'bg-gray-50 border-gray-200'}`}>
              {formStatus === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3 sm:gap-4 py-6 sm:py-8">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <i className="fas fa-check text-emerald-400 text-lg sm:text-xl" />
                  </div>
                  <p className={`font-bold text-base sm:text-lg ${dark ? 'text-white' : 'text-gray-900'}`}>Message Sent!</p>
                  <p className={`text-xs sm:text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Thanks for reaching out, I'll get back to you soon.</p>
                  <button onClick={() => setFormStatus('idle')} className="text-red-500 text-xs sm:text-sm font-semibold hover:underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  {[
                    { key: 'name',    type: 'text',  placeholder: 'Your Name' },
                    { key: 'email',   type: 'email', placeholder: 'Your Email' },
                  ].map(f => (
                    <input key={f.key} type={f.type} placeholder={f.placeholder} required value={formData[f.key]}
                      onChange={e => setFormData(p => ({ ...p, [f.key]: e.target.value }))}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        dark ? 'bg-white/6 border-white/10 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`} />
                  ))}
                  <select required value={formData.subject} onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      dark ? 'bg-white/6 border-white/10 text-white' : 'bg-white border-gray-300 text-gray-900'
                    }`}>
                    <option value="">Select Subject</option>
                    <option>Collaboration</option>
                    <option>Sponsorship</option>
                    <option>General Inquiry</option>
                  </select>
                  <textarea rows={4} placeholder="Your Message" required value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500 resize-none ${
                      dark ? 'bg-white/6 border-white/10 text-white placeholder-gray-600' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`} />
                  <button type="submit" disabled={formStatus === 'sending'}
                    className="w-full py-2.5 sm:py-3.5 rounded-xl font-bold text-white text-xs sm:text-sm bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed">
                    {formStatus === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="fas fa-circle-notch fa-spin" /> Sending…
                      </span>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={`py-6 sm:py-8 border-t ${dark ? 'bg-black border-white/6' : 'bg-gray-900 border-gray-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
              <i className="fab fa-youtube text-white text-[10px] sm:text-xs" />
            </div>
            <span className="text-white font-black text-xs sm:text-sm">VLG ARPIT</span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">&copy; {new Date().getFullYear()} VLG ARPIT. All rights reserved.</p>
          <a href="https://www.youtube.com/@ARPITVLG-i7p" target="_blank" rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 text-xs sm:text-sm font-semibold transition-colors">
            Subscribe →
          </a>
        </div>
      </footer>
    </div>
  );
}