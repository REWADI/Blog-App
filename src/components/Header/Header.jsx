import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Header } from './components'
import { Container } from 'postcss'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
function Header() {
    const authStatus = useSelector(state.auth.status )
    const navigate = useNavigate()

    const navItem = [
        {
            name:"Home",
            Path: '/',
            active : !authStatus
        },
        {
            name :"SignUp",
            Path :"/signup",
            active:!authStatus
        },
        {
            name:"",
            Path:'/all-posts',
            active:authStatus
        },
        {
            name:'Add Posts',
             Path:'/add-posts',
            active:authStatus
        }
    ]
    return (
        <header>
            <Container>
                <nav className='Flex'>  
                <div className='mr-4'>
                <Link to ='/'>
                <Logo width = '80px' />
                </Link>
                </div>
            <ul className='flex ml-auto'>
                {navItem.map ((item)=> 
                item.active ? (<li key = {item.name}>
                     <button
                     onClick={()=>navigate(item.slug)}
                     className='inline-block px-2 py-6 rounded-full duration-200 hover:bg-blue-200 '>  {item.name}</button>
                </li> ) : 
                null
                )}
                {authStatus && (
                <li>
                    <LogoutBtn/>
                </li> 
                )}
            </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
