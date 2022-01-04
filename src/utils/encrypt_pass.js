const bcrypt= require('bcryptjs')


exports.encryptString = (password)=>{
    return bcrypt.hashSync(password, 10)
}

exports.verifyPassword = (password, encrypt_password)=>{
    return bcrypt.compareSync(password, encrypt_password)
}