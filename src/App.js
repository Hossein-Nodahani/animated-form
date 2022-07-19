import Container from './components/Container';
import Background from './components/Background';
import { ToastContainer} from 'react-toastify';

import "./App.css"

function App() {
  
  return (
    <div className='App'>
        <Container />
        <Background />
        <ToastContainer />
    </div>
  );
}

export default App;
