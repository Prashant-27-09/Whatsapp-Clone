import React,{useState} from 'react'
import Conversations from './Conversations';
import Header from './Header'
import Search from './Search'

const Menu = () => {
  const [text, setText] = useState('');
  return (
    <div>
        <div  style={{marginTop: '14px important',position:'fixed'
    }}>
            <Header/>
            <Search setText={setText}/>
            <Conversations text={text}/>
        </div>
    </div>
  )
}

export default Menu