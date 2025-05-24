import jwt from 'jsonwebtoken';

const generateAccessToken = (userId) => {
    return jwt.sign(
        {userId},
        process.env.JWT_ACCESS_SECRET,
        {expiresIn: '15m'}
    )
}

const generateRefreshToken = (userId) => {
    return jwt.sign(
        {userId},
        process.env.JWT_REFREASH_SECRET,
        {expiresIn: '15m'}
    )
}

const verifyAccessToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (error) {
        return null;
    }
}

const verifyRefreshToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_REFREASH_SECRET);
    } catch (error) {
        return null;
    }
}

export {generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken};