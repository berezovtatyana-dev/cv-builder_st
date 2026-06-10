import { CVProvider } from './context/CVContext';
import './App.css';
import FormPanel from './components/FormPanel';

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
            <div className='FormPanel'>
              FormPanel
              <FormPanel />
              </div>
            <div className='PreviewPanel'>
              PreviewPanel
              {/* <PreviewPanel /> */}
            </div>
          </div>
        </main>
      
    </div>
  </CVProvider>
  );
}

export default App
