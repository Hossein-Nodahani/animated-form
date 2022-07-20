import styled from "styled-components"
import { ToastContainer} from 'react-toastify';

import Container from './components/Container';
import Background from './components/Background';

const AppContainer = styled.div`
          width: 100vw;
          height: ${visualViewport.height}px ;
          display: flex;
          align-items: center;
          justify-content: center;
`;

function App() {
  
  return (
    <AppContainer>
          <Container />
          <Background />
          <ToastContainer />
    </AppContainer>
  );
}

export default App;
