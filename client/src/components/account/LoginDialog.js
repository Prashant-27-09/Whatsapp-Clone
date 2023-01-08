import { Dialog } from '@mui/material';
import React ,{useContext} from 'react'
import './LoginDialog.css'
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { AccountContext } from '../context/AccountProvider';
import { addUser } from '../../service/api';


const dialogStyle ={
  height:'95%',
  marginTop: '12%',
  width : '60%',
  maxWidth: '100%',
  maxHeight : '100%',
  boxShadow : 'none',
  overflow:'hidden'
}


const LoginDialog = () => {


  const {setAccount } =useContext(AccountContext)

  const onLoginSuccess = async (res) => {
    const decoded=jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);


  }

  const onLoginError =(res)=>{
    console.log("login failed : " ,res);

  }

  return (
    <div>
       <Dialog  open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true}>
         <div className='uppar'>
            <div className='left'>
                <p>To use Whatsapp on your computer.</p>
                <ol>
                  <li>Open Whatsapp on your computer.</li>
                  <li>Tap menu Settings and select Whatsapp web.</li>
                  <li>Point your phone to this screen to capture the code</li>
                </ol>

            </div>
            <div className='right'>

              <img src='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg' alt='qr'/>
              <div id='logIn'  >
                <GoogleLogin 
                  onSuccess={onLoginSuccess}
                  onError={onLoginError}
                />
              </div>



            </div>


         </div>
        </Dialog>
    </div>
  )
}

export default LoginDialog;