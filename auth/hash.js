require('dotenv').config();
const crypto = require('crypto')

exports.passwordFingerprint = (password) => {
    const fingerprint = crypto
    .createHash('sha256').update(password + process.env.PASSWORD_PEPPER).digest('hex')

    return fingerprint
}