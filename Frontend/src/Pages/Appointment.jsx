import { Checkbox, DatePicker, Form, Input, Select, TimePicker } from 'antd';
import React, { useState } from 'react'
import help_logo from '../assets/help_logo.png'
import call_logo from '../assets/call_logo.png'
import mail_logo from '../assets/mail_logo.png'
import axios from 'axios';

const Appointment = () => {
    const [form] = Form.useForm();
        const [color, setColor] = useState();
    const [Message, setMessage] = useState();

    const onFinish = values => {
        const appointmentData = {
            patientName: values.patientName,
            email: values.email,
            phone: values.phone,
            country: values.country,
            preferredDate: values.preferredDate ? values.preferredDate.format("YYYY-MM-DD") : null,
            treatment: values.treatment,
            doctorName: values.doctorName,
            message: values.message,
        };

        axios.post("http://localhost:5001/api/Appointment_routes/addAppointment", appointmentData)
            .then((res) => {
                setMessage(res.data.message)
                setColor("text-green-500")
            })
            .catch((error) => {
                setMessage(error.response.data.message)
                setColor("text-red-500")
            })
    };

    return (
        <div className='flex'>
            <section className='h-full w-full p-5 flex flex-col gap-3'>
                <h1 className={`${color} text-2xl text-center`}>{Message}</h1>
                <span className='text-center flex flex-col gap-1'>
                    <h1 className='text-4xl'>Appointment / Consultation Request</h1>
                    <p className='text-xl text-gray-400'>Fill in your details and our team will get in touch with you.</p>
                </span>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="rounded-3xl border border-green-300 p-5 shadow-sm">
                            <h1 className="text-lg font-semibold">Your details</h1>
                            <Form.Item
                                label="Full Name"
                                name="patientName"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your name",
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Enter your full name"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Email Address"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your email",
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Enter your email"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Phone Number"
                                name="phone"
                            >
                                <Input
                                    size="large"
                                    placeholder="Enter your phone number"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Country"
                                name="country"
                            >
                                <Select
                                    size="large"
                                    placeholder="Select your country"
                                    options={[
                                        {
                                            value: "india",
                                            label: "India",
                                        },
                                        {
                                            value: "usa",
                                            label: "United States",
                                        },
                                        {
                                            value: "uk",
                                            label: "United Kingdom",
                                        },
                                        {
                                            value: "canada",
                                            label: "Canada",
                                        },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Preferred Date"
                                name="preferredDate"
                            >
                                <DatePicker
                                    size="large"
                                    className="w-full"
                                />
                            </Form.Item>
                        </div>
                        <div className="rounded-3xl border border-green-300 p-8 shadow-sm">
                            <h2 className="text-lg font-semibold">
                                Treatment & Message
                            </h2>

                            <Form.Item
                                label="Treatment / Service"
                                name="treatment"
                            >
                                <Select
                                    size="large"
                                    placeholder="Select treatment"
                                    options={[
                                        {
                                            value: "cardiology",
                                            label: "Cardiology",
                                        },
                                        {
                                            value: "neurology",
                                            label: "Neurology",
                                        },
                                        {
                                            value: "orthopedics",
                                            label: "Orthopedics",
                                        },
                                        {
                                            value: "dentistry",
                                            label: "Dentistry",
                                        },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Doctor (Optional)"
                                name="doctorName"
                            >
                                <Select
                                    size="large"
                                    placeholder="Select doctor"
                                    options={[
                                        {
                                            value: "doctor1",
                                            label: "Dr. John",
                                        },
                                        {
                                            value: "doctor2",
                                            label: "Dr. Smith",
                                        },
                                        {
                                            value: "doctor3",
                                            label: "Dr. Brown",
                                        },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Message / Medical Problem"
                                name="message"
                            >
                                <Input.TextArea
                                    rows={6}
                                    placeholder="Describe your medical condition or requirements..."
                                />
                            </Form.Item>

                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                            >
                                <Checkbox>
                                    I agree to the{" "}
                                    <span className="text-teal-700">
                                        Terms & Conditions & Privacy Policy
                                    </span>
                                </Checkbox>
                            </Form.Item>

                            <button
                                type="submit"
                                className='h-10 w-full text-xl hover:rounded-2xl cursor-pointer transition ease-in-out duration-500 text-white rounded-lg bg-green-800'
                            >
                                Submit Request
                            </button>
                        </div>

                    </div>
                </Form>
            </section>
            <section className='h-screen w-150 p-10 pt-37'>
                <div className='h-full w-full flex flex-col items-center justify-center gap-5 border border-green-300 bg-gray-100 rounded-2xl'>
                    <img src={help_logo} alt="help" className='h-30 w-30' />
                    <h1 className='text-3xl text-teal-600'>Need Help?</h1>
                    <p className='w-40 text-gray-400'>Our care team is here to assist you 24/7.</p>
                    <div className='flex gap-3 items-center justify-center'>
                        <img src={call_logo} alt="help" className='h-5 w-5' />
                        <p>+91 1234567890</p>
                    </div>
                    <div className='flex gap-3 items-center justify-center'>
                        <img src={mail_logo} alt="help" className='h-5 w-5' />
                        <p>medcare@gmail.com</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Appointment
