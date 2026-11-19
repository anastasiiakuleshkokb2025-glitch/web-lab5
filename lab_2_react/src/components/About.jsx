function About() {
  return (
    <section className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-pink-100 shadow-xl shadow-pink-500/5 hover:shadow-2xl hover:shadow-pink-500/15 hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
        Про мене
      </h2>
      <p className="text-slate-700 leading-relaxed font-medium text-sm">
        Студентка, вивчаю комп'ютерні технології.
      </p>
    </section>
  );
}

export default About;