import './App.css';
import Messenger from './components/Messenger';
import {GoogleOAuthProvider} from '@react-oauth/google'
import AccountProvider from './components/context/AccountProvider';
function App() {

  const clientId ='419313889625-v3giegs1bu56l6n6v4joem505r7pcptv.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
     </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
