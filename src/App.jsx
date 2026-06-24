import { CVProvider } from './context/CVContext';
import './App.css';
import FormPanel from './components/FormPanel';
import PreviewPanel from './components/PreviewPanel';

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
          <div className='grid'>
            <div className='FormPanel'>
              <FormPanel />
              </div>
            <div className='PreviewPanel'>
              <PreviewPanel />
            </div>
          </div>
        </main>
      </div>
  </CVProvider>
  );
}

export default App;
