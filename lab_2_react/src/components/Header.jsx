function Header({ toggleTheme }) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 rounded-3xl p-6 sm:p-8 mb-8 text-white shadow-2xl shadow-fuchsia-500/25 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        <div className="flex flex-col sm:flex-row items-center md:items-start text-center sm:text-left gap-4 sm:gap-6 flex-1">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center select-none">
            <span className="font-black text-4xl sm:text-5xl text-white tracking-wider drop-shadow-[0_0_15px_rgba(255,255,255,0.85)]">
              АК
            </span>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white drop-shadow-md">
              Кулешко Анастасія Ростиславівна
            </h1>
            
            <div className="mt-3 flex flex-col sm:flex-row items-center sm:items-start gap-2">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white font-medium text-xs sm:text-sm px-4 py-1.5 rounded-full border border-white/30 shadow-inner">
                Спеціалістка з кібербезпеки зі знанням Python та C#
              </span>

              <button
                type="button"
                onClick={toggleTheme}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium text-xs sm:text-sm px-4 py-1.5 rounded-full border border-white/30 transition-all cursor-pointer shadow-sm active:scale-95"
              >
                Змінити тему 🌙/☀️
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right text-xs sm:text-sm space-y-1 font-medium text-pink-100 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/15 w-full md:w-auto">
          <div>
            <span className="font-bold text-white">Вік:</span> 18 років
          </div>
          <div>
            <span className="font-bold text-white">Місто:</span> м. Львів
          </div>
          <div>
            <span className="font-bold text-white">Тел.:</span>{" "}
            <a href="tel:+380675438208" className="hover:text-white underline decoration-pink-300">
              +380 (67) 543-82-08
            </a>
          </div>
          <div>
            <span className="font-bold text-white">Email:</span>{" "}
            <a href="mailto:anastasiakulesko@gmail.com" className="hover:text-white underline decoration-pink-300">
              anastasiakuleshko@gmail.com
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;