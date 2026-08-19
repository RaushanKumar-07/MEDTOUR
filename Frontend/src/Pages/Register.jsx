import React from 'react'
import logo from "../assets/logo.png"
import Sign_up from '../Components/Auth/Sign_up'

const Register = () => {
    return (
        <div className="bg-[url('./assets/login_bg.png')] bg-cover bg-center h-screen flex items-center justify-around">
            <div className='h-125 w-110 flex flex-col gap-30'>
                <div className='flex gap-3 items-center'>
                    <img src={logo} alt="logo" className='h-20 w-20 rounded-full' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-4xl'>MedTour</h1>
                        <p>Care,treatment and a smooth medical journey</p>
                    </div>
                </div>
                <div>
                    <p className='text-4xl text-green-800'>Begin your journey to better health today.</p>
                </div>
            </div>
            <div>
                <Sign_up />
            </div>
        </div>
    )
}

export default Register
