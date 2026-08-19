import React from 'react'
import Sign_in from '../Components/Auth/Sign_in'
import logo from "../assets/logo.png"

const Login = () => {
    return (
        <div className="bg-[url('./assets/login_bg.png')] bg-cover bg-center h-screen flex items-center justify-around">
            <div className='h-125 w-110 flex flex-col gap-30'>
                <div className='flex gap-3 items-center'>
                    <img src={logo} alt="logo" className='h-20 w-20 rounded-full' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-4xl'>Medi Journey</h1>
                        <p>Care,treatment and a smooth medical journey</p>
                    </div>
                </div>
                <div>
                    <p className='text-4xl text-green-800'>Your health is our priority. Let us take care of the rest</p>
                </div>
            </div>
            <div>
                <Sign_in />
            </div>
        </div>
    )
}

export default Login
