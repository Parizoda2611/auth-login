const Io = require('../utils/Io')
const User = require('../models/users')
const Users = new Io(process.cwd() + '/db/users.json')
const Joi = require('joi')

const LoginUser = async (req, res) => {
  try{
    const { username, password} = req.body

    const schema = Joi.object({
      username: Joi.string().min(5).max(32).required(),
      password: Joi.number().required()
    })

    const { error } = schema.validate({username, password})

    if(error) return res.status(400).json({message: error.message})

    const users = await Users.read()

    const userId = (users[users.length - 1]?.id || 0) + 1
  
    const newUser = new User(id = userId, username, password)

    const allUsers = users.length ? [...users, newUser] : [newUser]

    Users.write(allUsers)

    res.status(200).json({message: "User created!"})


  } catch(error) {
    console.log(error);
  }
}

module.exports = {LoginUser}