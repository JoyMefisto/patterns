class DataBase {
  constructor (data) {
    if (DataBase.exists) return DataBase.instance

    DataBase.instance = this
    DataBase.exists = true
    this.data = data
  }

  getData () {
    return this.data
  }
}

const mongo = new DataBase('MongoDB')
console.log(mongo.getData()) // 'MongoDB'

const mysql = new DataBase('mysql')
console.log(mysql.getData()) // 'MongoDB'
