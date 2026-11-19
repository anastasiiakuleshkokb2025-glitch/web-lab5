import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {

    const osInformation = navigator.platform || 'Невідома ОС';
    const browserInformation = navigator.userAgent;

    localStorage.setItem('user_os', osInformation);
    localStorage.setItem('user_browser', browserInformation);

    setSysInfo({
      os: localStorage.getItem('user_os'),
      browser: localStorage.getItem('user_browser'),
    });
  }, []);

return (
    <footer className="mt-12 text-center text-xs text-slate-500 space-y-2 pb-8">
      <p className="font-medium">2026 рік</p>
      <div className="flex flex-col items-center justify-center space-y-1 max-w-xl mx-auto px-4">
        <p><strong>Операційна система:</strong> {sysInfo.os}</p>
        <p className="leading-normal break-words">
          <strong>Браузер:</strong> {sysInfo.browser}
        </p>
      </div>
    </footer>
  );
}

export default Footer;