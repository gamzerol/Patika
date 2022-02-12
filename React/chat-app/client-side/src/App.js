import './App.css';

import { ChatProvider } from './context/ChatContext';
import Container from './component/Container';

function App() {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
