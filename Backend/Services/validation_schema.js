const Joi = require("joi")


const SigninValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
})

const SignupValidation = Joi.object({
    fullName: Joi.string().max(15).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    password: Joi.string().required().min(8),
})

const ForgetValidation = Joi.object({
    email: Joi.string().required(),
})

const ChangePasswordValidation = Joi.object({
    currentPassword: Joi.string().required().min(8),
    newPassword: Joi.string().required().min(8),
    confirmPassword: Joi.string().required().min(8),
});

const UpdateValidation = Joi.object({
    fullName: Joi.string(),
    email: Joi.string().email(),
    role: Joi.string(),
    department: Joi.string(),
    phone: Joi.string().pattern(/^[0-9]{10}$/),
}).min(1);

const AppointmentValidation = Joi.object({
    patientName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    country: Joi.string().required(),
    preferredDate: Joi.string().required(),
    treatment: Joi.string().required(),
    doctorName: Joi.string(),
    message: Joi.string().required(),
    time: Joi.string(),
    status: Joi.string
})

const HospitalValidation = Joi.object({
    name: Joi.string().required(),
    hospitalId: Joi.string().required(),
    city: Joi.string().required(),
    treatment: Joi.string().required(),
    rating: Joi.string().required(),
    price: Joi.string().required(),
})

const DoctorValidation = Joi.object({
    name: Joi.string().required(),
    doctorId: Joi.string().required(),
    specialization: Joi.string().required(),
    hospitalName: Joi.string().required(),
    experience: Joi.string().required(),
    consultationFee: Joi.string().required(),
})

module.exports = {
    SigninValidation,
    SignupValidation,
    ForgetValidation,
    ChangePasswordValidation,
    UpdateValidation,
    AppointmentValidation,
    HospitalValidation,
    DoctorValidation
};