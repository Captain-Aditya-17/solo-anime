const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const userModel = require('../models/user.model');

module.exports.createUserController = async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {username, email,password} = req.body;

    try {
        const user = await userService.createUser({username,email,password})
        const token = await user.generateToken()
        return res.status(201).json({user,token})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports.loginController = async (req,res)=>{

    const errors = validationResult(req);   

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {username,email,password} = req.body;

    try {
        const user = await userModel.findOne({email}).select('+password');
        if(!user){
            return res.status(401).json({error: 'Invalid data'})
        }

        const isMatch = await user.isVaildPassword(password);

        if(!isMatch){
            return res.status(401).json({error: 'Invalid data'})
        }
        const token = await user.generateToken()

        res.cookie('token',token)

        return res.status(200).json({user,token})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports.profileController = async(req,res)=>{
    return res.status(200).json({
        user: req.user
    })
}