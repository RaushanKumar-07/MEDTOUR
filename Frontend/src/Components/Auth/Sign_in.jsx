import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Flex, Modal } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router';
const Sign_in = () => {
    const [color, setColor] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setmessage] = useState(null);
    const [verifyMessage, setVerifyMessage] = useState(null);
    const navigate = useNavigate();
    const onFinish = (values) => {
        axios.post("http://localhost:5001/api/Login_routes/Signin",
            values,
            {
                withCredentials: true,
            }
        )
            .then((response) => {
                setmessage(response.data.message)
                setColor("text-green-500")
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.data)
                );

                localStorage.setItem(
                    "token",
                    response.data.accessToken
                );

                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
            })
            .catch((error) => {
                console.log("Error:", error.response.data.message)
                setmessage(error.response.data.message)
                setColor("text-red-500")
            })
    };

    const verifyEmail = (values) => {
        axios.post("http://localhost:5001/api/Login_routes/verifyEmail", values)
            .then((res) => {
                setVerifyMessage(res.data.message)
                setColor("text-green-500")
                console.log(res.data.data)
            })
            .catch((err) => {
                setVerifyMessage(err.response.data.message)
                setColor("text-red-500")
            })
    }

    return (
        <div className='h-150'>
            <Modal
                centered
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={null}
            >
                <h1 className={`${color} text-2xl text-center`}>{verifyMessage}</h1>
                <Form layout={"vertical"} onFinish={verifyEmail}>
                    <Form.Item
                        label="Email:"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Enter your email' />
                    </Form.Item>

                    <Form.Item
                        label="OTP:"
                        name="otp"
                        rules={[{ required: true, message: 'Please input your otp!' }]}
                    >
                        <Input placeholder='Enter otp' minLength={6} maxLength={6} />
                    </Form.Item>
                    <Form.Item label={null}>
                        <button className='h-10 w-full text-xl bg-green-800 hover:rounded-2xl cursor-pointer transition ease-in-out duration-500 text-white rounded-lg' type='submit'>
                            Verify email
                        </button>
                    </Form.Item>
                </Form>
            </Modal>
            <div className='h-full w-120 flex flex-col gap-10 items-center border-2 border-green-200 justify-center rounded-2xl bg-white'>
                <div className=' w-100 flex flex-col gap-3 text-center'>
                    <h1 className={`${color} text-2xl`}>{message}</h1>
                    <h1 className='text-black text-4xl'>Welcome Back!</h1>
                    <p className='text-gray-500'>Please login to your account</p>
                </div>
                <Form layout={'vertical'} onFinish={onFinish}>
                    <Form.Item
                        label="Email:"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder='Enter your email' />
                    </Form.Item>

                    <Form.Item
                        label="Password:"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Enter your password' minLength={8} />
                    </Form.Item>

                    <Form.Item>
                        <Link to="/forgetPassword" className="text-green-600! hover:text-green-700! text-lg">
                            Forgot password
                        </Link>
                    </Form.Item>

                    <Form.Item label={null}>
                        <button className='h-10 w-100 text-xl hover:rounded-2xl cursor-pointer transition ease-in-out duration-500 text-white rounded-lg bg-green-800' type='submit'>
                            Login
                        </button>
                    </Form.Item>
                    <Form.Item>
                        <Flex justify='center' align='center' gap={5} className='text-lg'>
                            <p>Don't have account?</p>
                            <Link to="/signUp" className="text-green-600! hover:text-green-700!">
                                Sign up
                            </Link>
                        </Flex>
                    </Form.Item>
                    <Form.Item>
                        <Flex justify='center' align='center' gap={5} className='text-lg'>
                            <p>For email verification</p>
                            <button className='text-green-600 hover:cursor-pointer hover:text-green-700' onClick={() => setModalOpen(true)}>Click here</button>
                        </Flex>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Sign_in
