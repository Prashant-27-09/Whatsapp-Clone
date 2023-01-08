import { useContext, useState } from 'react';

import { Box, styled } from '@mui/material';
import { Chat as MessageIcon,MoreVert } from '@mui/icons-material';

import { AccountContext } from '../../context/AccountProvider';

//components
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
    
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%',
    marginTop:0,
    marginLeft:0,
})

const Header = () => {
    
    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);
    
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Component style={{width:'390px',minWidth:'150px important'}}>
                <Image src={account.picture} onClick={() => toggleDrawer()} />
                <Wrapper>
                    <MessageIcon />
                    <MoreVert />
                </Wrapper>
            </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  )
}

export default Header