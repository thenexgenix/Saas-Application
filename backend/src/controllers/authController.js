import User from '../models/User.js';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/token.js';

const signUp = async (req, res) => {
    const {email, password} = req.body;
    // console.log(email, password);
    try {
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const user = new User({email, password});
        await user.save();

        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        user.refreshToken = refreshToken;
        await user.save();

        res.status(201).json({accessToken, refreshToken});
    } catch (error) {
        res.status(500).json({message: "Server eroor", error: error.message});
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "User not found"});
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        user.refreshToken = refreshToken;
        await user.save();

        res.status(200).json({accessToken, refreshToken});
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message});
    }
}

const logout = async (req, res) => {
    const {refreshToken} = req.body;

    try {
        const decoded = verifyRefreshToken(refreshToken);
        if(!decoded) {
            return res.status(400).json({message: "Invalid refresh token"});
        }

        console.log(decoded);
        await User.findByIdAndUpdate(decoded.userId, {refreshToken: null});

        res.status(200).json({message: "Logged out successfully"});

    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message});
    }
}

export { signUp, login, logout };