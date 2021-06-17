const Record = require('../record')
const Category = require('../category')
const db = require('../../config/mongoose')
const recordList = require('./record.json')
const mongoose = require('mongoose')
let categoryList

db.once('open', () => {
  console.log('mongodb connected')
  Category.find()
    .lean()
    .sort({ _id: 'asc' }) // desc
    .then(categories => setCategories(categories))
    .catch(error => console.error(error))

  console.log('record seeder done')
})

function setCategories(obj) {
  categoryList = obj
  for (var key in recordList.results) {
    const name = recordList.results[key].category
    const code = categoryList.find(ct => ct.name === name).code;
    //console.log(`name: ${name}, code: ${code}`)
    //將類別名稱對應類別代碼
    recordList.results[key].categoryIcon = code
    //console.log(recordList.results[key])
    Record.create(recordList.results[key])
  }
}