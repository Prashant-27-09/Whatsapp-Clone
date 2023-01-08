import React,{useContext,useEffect,useState} from 'react'
import { AccountContext } from '../../context/AccountProvider';
import { styled, Box, Typography } from "@mui/material";
import { setConversation,getConversation } from '../../../service/api';
import { formatDate } from '../../../utils/common-utils';


const Component = styled(Box)`
    height: 40px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
    
`;
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px',
    marginTop:'0px',
    marginLeft:0,
});
const Ibox = styled(Box)`
width : 73px;
    

`

const Container = styled(Box)`
    display: flex;
    marginleft : 0px;
`;
const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    margin-left: 10px;
`;


const Conversation = ({user}) => {

    const {setPerson,account,newMessageFlag}=useContext(AccountContext);
    const [message, setMessage] = useState({});
    useEffect(() => {
        const getConversationMessage = async() => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }
        getConversationMessage();
    }, [newMessageFlag]);



    
    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    }
  return (
    <Component  onClick={()=>getUser()}>
        <Ibox>
                <Image src={user.picture} alt="display picture" />
        </Ibox>
            <Box style={{width: '100%'}}>
                <Container>
                    <Typography>{user.name}</Typography>
                    { 
                        message?.text && 
                        <Timestamp>{formatDate(message?.timestamp)}</Timestamp>        
                    }
                </Container>
                <Box>
                    <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
                </Box>
            </Box>
        </Component>
  )
}

export default Conversation