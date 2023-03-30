import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger'
import AccountProvider from './components/context/AcountProvider';

function App() {
  //client id is recieved from creating a new project in console.cloud.google.com
  //and authorizing the app to get requests from a google account
  //secret client key='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'
  const clientId = '336935756296-ml2041v16nb3mcfm05vimnk8v6gbcv1o.apps.googleusercontent.com';
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App
