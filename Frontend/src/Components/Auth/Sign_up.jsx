import React, { useState } from 'react'
import { Button, Form, Input, Flex, Select } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Sign_up = () => {
    const [color, setColor] = useState();
    const [message, setmessage] = useState();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log("Sending:", values);

        try {
            const response = await axios.post(
                "http://localhost:5001/api/Login_routes/Signup",
                values,
                {
                    withCredentials: true,
                }
            );

            console.log("Response:", response.data);

            setmessage(response.data.message);
            setColor("text-green-500");

            setTimeout(() => {
                navigate("/login");
            }, 1500);


        } catch (error) {
            console.log("Error:", error.response?.data || error);

            setmessage(
                error.response?.data?.message || "Something went wrong"
            );
            setColor("text-red-500")
        }
    };

    return (
        <div className='h-full flex items-center justify-center'>
            <div className='h-full w-120 flex flex-col gap-5 items-center border-2 p-2 border-green-200 justify-center rounded-2xl bg-white'>
                <h1 className={`w-120 text-2xl text-center ${color}`}>{message}</h1>
                <div className=' w-100 flex flex-col gap-1'>
                    <h1 className='text-green-800 text-3xl'>Create Your Account</h1>
                    <p className='text-gray-400 text-lg'>Fill in your details to register</p>
                </div>
                <Form layout={"vertical"} onFinish={onFinish}>
                    <Form.Item
                        label="Full Name:"
                        name="fullName"
                        rules={[{ required: true, message: 'Please input your Full name!' }]}
                    >
                        <Input placeholder='Enter your full name' />
                    </Form.Item>
                    <Form.Item
                        label="Email:"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Enter your email' />
                    </Form.Item>
                    <Form.Item
                        label="Phone:"
                        name="phone"
                        rules={[{
                            required: true,
                            pattern: /^[0-9]{10}$/,
                            message: "Mobile number must contain exactly 10 digits!",
                        },]}
                    >
                        <Input placeholder='Enter your phone number' maxLength={10} />
                    </Form.Item>
                    <Form.Item
                        label="Password:"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Create your password' />
                    </Form.Item>
                    <Form.Item label={null}>
                        <button className='h-10 w-100 text-xl hover:rounded-2xl cursor-pointer transition ease-in-out duration-500 text-white rounded-lg bg-green-800' type='submit'>
                            Register
                        </button>
                    </Form.Item>
                    <Form.Item>
                        <Flex justify='center' align='center' gap={5} className='text-lg'>
                            <p>Already have account?</p>
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

export default Sign_up
