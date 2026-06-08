import { useState } from 'react';

import { CVProvider } from './context/CVContext';
import './App.css'

function App() {
  return (
    <CVProvider>
      <div>
        <header>
          <div>
            <h1>Конструктор резюме</h1>
          </div>
        </header>
        <main>
          <div className='Grid'>
            <div className='FormPanel'>FormPanel</div>
            <div className='PreviewPanel'>PreviewPanel</div>
          </div>
        </main>
      
    </div>
  </CVProvider>
  );
}

export default App
