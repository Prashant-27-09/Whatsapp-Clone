import React,{useContext} from 'react'
import './Messenger.css'
import LoginDialog from './account/LoginDialog';
import ChatDialog from './chat/ChatDialog';
import { AccountContext } from './context/AccountProvider';




const Messenger = () => {

  const { account} = useContext(AccountContext);
   return (
    <div>

      {  account ? 
      <>
      <div className='Header'/>
      <div className='loginLower'/>
      <ChatDialog/>
      </>
      :
      <>
      <div className='loginUppar'/>
      <div className='loginLower'/>
      <LoginDialog />
      </>
      }
    </div>
  )
}

export default Messenger;