const userModel = require('../models/user.model')

exports.createUser = async ({
    username,email,password
})=>{
    if(!username || !email || !password){
        throw new Error('Email and password are required')
    }

    const hashedPassword = await userModel.hashPassword(password)

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    return user
}
