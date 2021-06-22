const Record = require('../record')
const Category = require('../category')
const db = require('../../config/mongoose')
const { results } = require('./record.json')

db.once('open', () => {
  Category.find()
    .lean()
    .sort({ _id: 'asc' }) // desc
    .then(categories => setCategories(categories))
    .catch(error => console.error(error))
})

function setCategories (obj) {
  const categoryList = obj
  results.forEach(record => {
    const name = record.category
    const code = categoryList.find(ct => ct.name === name).code
    record.categoryIcon = code
  })
  Record.create(results)
    .then(() => {
      console.log('record seeder done')
      return db.close()
    })
    .then(() => {
      console.log('mongodb disconnected!')
    })
    .catch(err => console.log(err))
}
