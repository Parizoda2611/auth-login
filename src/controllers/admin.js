const Io = require('../utils/Io')
const User = require('../models/users')
const Users = new Io(process.cwd() + '/db/users.json')
const History = require('../models/users')
const Histories = new Io(process.cwd() + '/db/history.json')

const adminPanel = async (req, res) => {
  try{
    const { id } = req.params
    const { username, password } = req.body

    const users = await Users.read()
    const user = users[id - 1]

    const histories = await Histories.read()
    const newHistory = new History(id, username, password, date = new Date().toLocaleDateString())

    const allUsers = users.map((e) => {
      if(user.id == e.id){
        user.username = username ? username : user.username
        user.password = password ? password : user.password
      }
      return e
    })
    console.log(allUsers);
    Users.write(allUsers)
    Histories.write(newHistory)
    res.status(200).json({message: "Updated!"})
  }catch(error){
    console.log(error);
  }}

  module.exports = {
   adminPanel
  }