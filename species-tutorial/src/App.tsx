import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import TutorialSection from './components/TutorialSection';
import CodeExplorer from './components/CodeExplorer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <main>
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'tutorial' && <TutorialSection />}
        {activeSection === 'code' && <CodeExplorer />}
      </main>
    </div>
  );
}

export default App;