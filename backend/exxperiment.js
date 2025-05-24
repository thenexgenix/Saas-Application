import {randomBytes} from 'crypto';

const generate = (length = 16) => {
    return randomBytes(length).toString('hex');
}

const accessSecret = generateSecret();
const refreshSecret = generateSecret();

console.log('JWT_ACCESS_SECRET:', accessSecret);
console.log('JWT_REFRESH_SECRET:', refreshSecret);