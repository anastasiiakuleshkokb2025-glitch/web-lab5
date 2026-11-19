import { useState, useEffect } from 'react';

const VARIANT_NUMBER = 8;

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Помилка завантаження коментарів:', error));
  }, []);

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 mb-8 border border-slate-100">
      <h2 className="text-xl font-bold text-pink-600 mb-6">Коментарі роботодавців</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">{comment.name}</h4>
            <p className="text-xs text-pink-500 font-medium mb-2">
              <span className="font-bold text-slate-600">Email:</span> {comment.email}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">{comment.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;