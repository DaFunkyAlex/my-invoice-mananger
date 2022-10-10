import {MainLayout} from "./layouts/MainLayout"
import './App.css';
import UserProvider from './services/User/UserProvider'

function App() {
  return (
    <UserProvider>
      <MainLayout>
          <div><strong>Hello</strong></div>
      </MainLayout>
    </UserProvider>
  );
}

export default App;
