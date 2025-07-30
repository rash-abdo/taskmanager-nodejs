const db = require('../data/db')

exports.createUser = (username, hashedPassword, admin) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO users (username, password, admin) VALUES (?, ?, ?)',
            [username, hashedPassword,admin],
            (err, result) => {
                if (err) return reject(err)
                resolve(result.insertId)
            }
        )
    })
}

exports.storeFingerprint = (hashedPassword) => {
    return new Promise((resolve,reject) => {
        db.query(
            'INSERT INTO password_fingerprint (pass) VALUES (?)',
            [hashedPassword],
            (err,result) => {
                if (err) return reject(err)
                resolve(result.insertId)
            }
        )
    })
}

exports.findByUsername = (username) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
            if (err) return reject(err)
            resolve(results[0])
        })
    })
}