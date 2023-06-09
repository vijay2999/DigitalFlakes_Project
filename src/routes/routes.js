const express = require('express')
const router=express.Router()
const {createuser,updateUser,Createproduct,updateProduct} = require('../Middleware/validations')
const auth=require('../Middleware/auth')
const {createUser,getUser,login,update} = require('../Controllers/userController')

router.post('/register',createuser,createUser)
router.post('/login',login)
router.post('/products',Createproduct,createproduct)
router.post('/users/:userId/cart',auth.authentication,auth.authorization,createCart)
