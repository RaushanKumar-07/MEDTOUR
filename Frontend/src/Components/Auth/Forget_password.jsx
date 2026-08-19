import React, { useState } from 'react'
import { Button, Form, Input, Flex } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Forget_password = () => {
    const [formLayout] = useState('vertical');
    const [message, setmessage] = useState();
    const [color, setColor] = useState();
    const navigate = useNavigate();
    const onFinish = values => {
        console.log('Success:', values);
        axios.get("https://medtour.onrender.com/api/Login_routes/Forget", values)
        .then((response)=>{
            console.log("Response:",response.data.message)
            setmessage(response.data.message)
            setColor("text-green-500")
            if(response.data.message){
                setTimeout(()=>{
                    navigate("/")
                },1500);
            }
        })
        .catch((error)=>{
            console.log("Error:",error.response.data.message)
            setmessage(error.response.data.message)
            setColor("text-red-500")
        })
    };
    return (
        <div className="bg-[url('./assets/login_bg.png')] h-screen w-full flex items-center justify-center">
            <div className='flex flex-col gap-5 items-center justify-center rounded-2xl bg-white p-8'>
                <h1 className={`${color} text-2xl text-center`}>{message}</h1>
                <div className=' w-100 flex flex-col gap-3 text-center'>
                    <h1 className='text-green-800 text-4xl '>Forget Password</h1>
                    <p className='text-gray-400 text-md'>Password will send to your email.</p>
                </div>
                <Form layout={formLayout} onFinish={onFinish}>
                    <Form.Item
                        label="Email:"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Enter your email' />
                    </Form.Item>
                    <Form.Item label={null}>
                        <button className='h-10 w-100 text-xl hover:rounded-2xl cursor-pointer transition ease-in-out duration-500 text-white rounded-lg bg-green-800' type='submit'>
                            Send
                        </button>
                    </Form.Item>
                    <Form.Item>
                        <Flex justify='center' align='center' gap={5} className='text-lg'>
                            <p>Remember password?</p>
                            <Link to="/login" className="text-green-600! hover:text-green-700!">
                                Login here
                            </Link>
                        </Flex>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Forget_password
