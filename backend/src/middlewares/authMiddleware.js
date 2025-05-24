import { verifyAccessToken} from "../utils/token.js";

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyAccessToken(token);
    if (!decoded) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
    req.user = decoded;
    next();
}

export default authenticate;
