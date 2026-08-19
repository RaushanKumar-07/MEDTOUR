const config = require("../config/config");
const crypto = require("crypto");
const Session_model = require("../Models/Session_model");
const jwt = require("jsonwebtoken");

const Refresh_token = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                success: false,
                message: "Refresh token not found"
            });
        }

        // Verify refresh token
        const decoded = jwt.verify(
            refreshToken,
            config.JWT_SECRET
        );

        // Hash refresh token
        const refreshTokenHash = crypto
            .createHash("sha256")
            .update(refreshToken)
            .digest("hex");

        // Find session
        const session = await Session_model.findOne({
            refreshTokenHash,
            revoked: false
        });

        if (!session) {
            return res.status(401).json({
                success: false,
                message: "Invalid refresh token"
            });
        }

        // Create new refresh token
        const newRefreshToken = jwt.sign(
            {
                id: decoded.id
            },
            config.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        // Hash new refresh token
        const newRefreshTokenHash = crypto
            .createHash("sha256")
            .update(newRefreshToken)
            .digest("hex");

        // Replace old hash
        session.refreshTokenHash = newRefreshTokenHash;

        await session.save();

        // Create new access token
        const accessToken = jwt.sign(
            {
                id: decoded.id,
                sessionId: session._id
            },
            config.JWT_SECRET,
            {
                expiresIn: "15m"
            }
        );

        // Send new refresh token cookie
        res.cookie(
            "refreshToken",
            newRefreshToken,
            {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000
            }
        );

        return res.status(200).json({
            success: true,
            message: "Access token refreshed successfully",
            accessToken
        });

    } catch (error) {

        // Refresh token expired/invalid
        if (
            error.name === "TokenExpiredError" ||
            error.name === "JsonWebTokenError"
        ) {
            return res.status(401).json({
                success: false,
                message: "Refresh token expired or invalid"
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = Refresh_token;