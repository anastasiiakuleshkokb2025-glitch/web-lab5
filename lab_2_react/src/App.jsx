import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`resume-wrapper ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="max-w-4xl mx-auto px-4">
        <Header toggleTheme={toggleTheme} />
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <About />
              <Education />
            </div>
            <div>
              <Skills />
            </div>
          </div>

          <Experience />
          <Reviews />
        </div>

        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;