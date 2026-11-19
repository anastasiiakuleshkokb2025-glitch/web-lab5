import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold"
        >
          ✕
        </button>
        <h3 className="text-lg font-bold text-slate-900 mb-4">Зворотний зв'язок</h3>
        <form action="https://formspree.io/f/mjyypekk" method="POST" className="space-y-3">
          <input type="text" name="name" placeholder="Ім'я" required className="w-full p-2.5 border rounded-xl text-sm" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-2.5 border rounded-xl text-sm" />
          <input type="tel" name="phone" placeholder="Телефон" required className="w-full p-2.5 border rounded-xl text-sm" />
          <textarea name="message" placeholder="Повідомлення" rows="3" required className="w-full p-2.5 border rounded-xl text-sm" />
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;