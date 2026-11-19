function Skills() {
  return (
    <section className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-cyan-100 shadow-xl shadow-cyan-500/5 hover:shadow-2xl hover:shadow-cyan-500/15 transition-all duration-300 h-full">
      <h2 className="text-xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-5">
        Навички
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/70 hover:border-amber-300 transition-all">
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider block mb-2.5">
            Мови програмування
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-white text-amber-900 border border-amber-300/80 shadow-sm">
              Python
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-white text-amber-900 border border-amber-300/80 shadow-sm">
              C#
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50/50 border border-rose-200/70 hover:border-rose-300 transition-all">
          <span className="text-xs font-black text-rose-800 uppercase tracking-wider block mb-2.5">
            Інструменти
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-white text-rose-900 border border-rose-300/80 shadow-sm">
              Git
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-white text-rose-900 border border-rose-300/80 shadow-sm">
              GitHub
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-white text-rose-900 border border-rose-300/80 shadow-sm">
              VS Code
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50/50 border border-sky-200/70 hover:border-sky-300 transition-all sm:col-span-2">
          <span className="text-xs font-black text-sky-800 uppercase tracking-wider block mb-2">
            Мережеві технології
          </span>
          <p className="text-xs font-medium text-slate-700 leading-relaxed">
            Налаштування базових топологій у Cisco Packet Tracer (комутатори, маршрутизатори, точки доступу)
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50/50 border border-indigo-200/70 hover:border-indigo-300 transition-all sm:col-span-2">
          <span className="text-xs font-black text-indigo-800 uppercase tracking-wider block mb-2.5">
            Мови спілкування
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-white text-indigo-900 border border-indigo-300/80 shadow-sm">
              Українська (рідна)
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-white text-indigo-900 border border-indigo-300/80 shadow-sm">
              Англійська (середній рівень, B1)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;