document.addEventListener('DOMContentLoaded', () => {

  // 1. LOCALSTORAGE (Збереження та вивід ОС/браузера)
  const osInformation = navigator.platform;
  const browserInformation = navigator.userAgent;

  localStorage.setItem('user_os', osInformation);
  localStorage.setItem('user_browser', browserInformation);

  const osElement = document.getElementById('os-details');
  const browserElement = document.getElementById('browser-details');

if (osElement && browserElement) {
    osElement.textContent = localStorage.getItem('user_os');
    browserElement.textContent = localStorage.getItem('user_browser');
  }


  // 2. FETCH API (Завантаження коментарів)
  const VARIANT_NUMBER = 8;

  function loadEmployerComments() {
    const container = document.getElementById('comments-container');

    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`)
      .then(response => response.json())
      .then(comments => {
        if (!container) return;
        container.innerHTML = '';

        comments.forEach(comment => {
          const commentDiv = document.createElement('div');
          commentDiv.style.cssText = 'border-bottom: 1px solid #e2e8f0; padding: 10px 0; margin-bottom: 10px;';

          commentDiv.innerHTML = `
            <h4 style="margin: 0 0 4px 0; color: #1e293b;">${comment.name}</h4>
            <p style="margin: 0 0 6px 0; font-size: 0.85rem; color: #64748b;"><strong>Email:</strong> ${comment.email}</p>
            <p style="margin: 0; font-size: 0.95rem; color: #334155;">${comment.body}</p>
          `;

          container.appendChild(commentDiv);
        });
      })
      .catch(error => {
        console.error('Помилка при завантаженні коментарів:', error);
        if (container) {
          container.innerHTML = '<p style="color: red;">Не вдалося завантажити коментарі.</p>';
        }
      });
  }

  loadEmployerComments();


  // ==========================================
  // 3. МОДАЛЬНЕ ВІКНО ЗВОРOТНОГО ЗВ'ЯЗКУ
  // ==========================================
  const modal = document.getElementById('contact-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  setTimeout(() => {
    if (modal) modal.style.display = 'flex';
  }, 60000);

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      if (modal) modal.style.display = 'none';
    });
  }


  // ==========================================
  // 4. ДАТА ТА ЧАС / ПЕРЕМИКАЧ ТЕМИ
  // ==========================================
  const themeBtn = document.getElementById('theme-toggle-btn');
  
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= 7 && currentHour < 21) {
    document.body.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

});