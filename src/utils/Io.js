const fs = require('fs').promises

class Io{
  dir
  constructor(dir){
    this.dir = dir
  }

  async read(){
    const data = await fs.readFile(this.dir, {encoding: "utf-8"})

    return data ? JSON.parse(data) : data 
  }
  write(data){
    fs.writeFile(this.dir, JSON.stringify(data, null, 2))
  }
}

module.exports = Io