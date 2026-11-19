function Experience() {
  const projects = [
    {
      title: "Навчальний проєкт: Локальна комп'ютерна мережа",
      desc: "Проєктування та тестування топології мережі в середовищі Cisco Packet Tracer: налаштування адресації, бездротового зв'язку та комутації обладнання.",
      tag: "Cisco / Networking",
      color: "from-blue-500 to-cyan-500",
      hoverBorder: "hover:border-cyan-400",
    },
    {
      title: "Проєкт на Python: Консольна утиліта",
      desc: "Розробка скрипту для автоматизації обробки текстових файлів та базових обчислень.",
      tag: "Python / Scripting",
      color: "from-amber-500 to-orange-500",
      hoverBorder: "hover:border-amber-400",
    },
    {
      title: "Веброзробка: Вебсторінка резюме (HTML / React)",
      desc: "Створення семантичної розмітки сторінки за допомогою HTML5 та декомпозиція інтерфейсу на React-компоненти з використанням Vite.",
      tag: "React / Vite / Tailwind",
      color: "from-fuchsia-500 to-pink-500",
      hoverBorder: "hover:border-pink-400",
    },
  ];

  return (
    <section className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-pink-100 shadow-xl shadow-pink-500/5 hover:shadow-2xl hover:shadow-pink-500/15 transition-all duration-300 lg:col-span-3">
      <h2 className="text-xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
        Досвід та проєкти
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${p.hoverBorder}`}
          >
            <div>
              <span className={`inline-block text-[10px] font-black uppercase tracking-wider text-white px-2.5 py-1 rounded-lg bg-gradient-to-r ${p.color} mb-3 shadow-sm`}>
                {p.tag}
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;