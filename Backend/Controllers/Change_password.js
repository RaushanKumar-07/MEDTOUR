const Signup_Model = require("../Models/Signup_Model");
const { ChangePasswordValidation } = require("../Services/validation_schema");
const bcrypt = require("bcrypt")

const Change_password = async (req, res) => {

    try {

        const details = await ChangePasswordValidation.validateAsync(req.body);
        const { id } = req.params
        const { currentPassword, newPassword, confirmPassword } = details;

        // Check new password and confirm password
        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "New password and confirm password should be same."
            });
        }

        if (currentPassword == newPassword) {
            return res.status(400).json({
                success: false,
                message: "Current password and new password should be different."
            });
        }

        // Find user
        const user = await Signup_Model.findOne({
            id: id
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

         const passwordMatch = await bcrypt.compare(
             currentPassword,
             user.password
         )
 
         if (!passwordMatch) {
             return res.status(400).json({
                 success: false,
                 message: "Invalid Current Password."
             });
         }

        const newHashPassword = await bcrypt.hash(newPassword,10)

        // Update password
        user.password = newHashPassword;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password changed successfully."
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = Change_password;