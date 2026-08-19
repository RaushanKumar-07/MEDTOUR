const crypto = require("crypto");
const bcrypt = require("bcrypt");
const Session_model = require("../Models/Session_model");



const Logout = async (req, res) => {

    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(400).json({
                suuccess: false,
                message: "Refresh token not found"
            })
        }

        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

        const session = await Session_model.findOne({
            refreshTokenHash,
            revoked: false
        })

        if (!session) {
            return res.status(400).json({
                success: false,
                message: "Invalid refresh token"
            })
        }

        session.revoked = true;
        await session.save()

        res.clearCookie(
            "refreshToken",
            {
                httpOnly: true,
                secure: false,
                sameSite: "lax"
            }
        )

        res.status(200).json({
            success: true,
            message: "Logged out successfully.."
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}

module.exports = Logout