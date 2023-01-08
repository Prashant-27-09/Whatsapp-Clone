import { Box,styled ,Divider} from '@mui/material';
import React,{useEffect,useState,useContext} from 'react'
import { getUsers } from '../../../service/api'
import Conversation from './Conversation';
import { AccountContext } from '../../context/AccountProvider';

const Component= styled(Box)`
  height : 81vh;
  overflow : overlay;


  `
const StyledDivider  = styled(Divider)`
  margin : 0px 0px 0px 70px;
  opacity : 0.2;
  color: rgba(0,0,0,0.4);
`

const Conversations = ({text}) => {

  const [users, setUsers] = useState([]);
  const {account,socket,setActiveUsers}= useContext(AccountContext);

  useEffect(() => {
    const fetchData =async ()=>{
        const data = await getUsers();
        let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(fiteredData);
    }
    fetchData();
  
   
  }, [text])
  
  useEffect(() => {
    socket.current.emit('addUser', account);
    socket.current.on("getUsers", users => {
        setActiveUsers(users);
    })
}, [account])


  return (
    <Component>
      {
        users.map(user=>(
          user.sub !== account.sub &&
          <>
          <Conversation user={user} key={user.sub}/>
          <StyledDivider  />
          </>
         
        ))
      }
    </Component>
  )
}

export default Conversations;