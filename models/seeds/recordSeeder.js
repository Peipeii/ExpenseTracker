const Record = require('../record')
const Category = require('../category')
const db = require('../../config/mongoose')
const recordList = require('./record.json')
const mongoose = require('mongoose')

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
  const categoryList = obj
  for (var key in recordList.results) {
    const name = recordList.results[key].category
    const code = categoryList.find(ct => ct.name === name).code;
    //將類別名稱對應類別代碼塞進records表裡
    recordList.results[key].categoryIcon = code
    //console.log(`name: ${name}, code: ${code}`)
    //console.log(recordList.results[key])
    Record.create(recordList.results[key])
  }
}