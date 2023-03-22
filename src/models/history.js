class History{
  constructor(id, username, password, date = new Date()){
    this.id = id
    this.username = username
    this.password = password
    this.date = date
  }
}

module.exports = History
