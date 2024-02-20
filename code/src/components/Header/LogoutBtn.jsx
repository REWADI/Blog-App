import React from 'react'
import { logout } from '../../Store/authSlice'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout()
        .then(() => { dispatch(logout())})
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded'>
        </button>
    )
}
export default LogoutBtn