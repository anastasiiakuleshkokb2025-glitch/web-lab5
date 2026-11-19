function Education() {
  return (
    <section className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-purple-100 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/15 hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        Освіта
      </h2>
      <ul className="space-y-2.5 text-xs font-semibold">
        <li className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100 text-slate-800">
          <span className="text-purple-600 block text-[10px] uppercase font-bold tracking-wider mb-0.5">Університет</span>
          Національний університет "Львівська політехніка"
        </li>
        <li className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100 text-slate-800">
          <span className="text-purple-600 block text-[10px] uppercase font-bold tracking-wider mb-0.5">Інститут</span>
          Інститут комп'ютерних технологій, автоматики та метрології (ІКТА)
        </li>
        <li className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100 text-slate-800">
          <span className="text-purple-600 block text-[10px] uppercase font-bold tracking-wider mb-0.5">Спеціальність</span>
          Кібербезпека
        </li>
      </ul>
    </section>
  );
}

export default Education;