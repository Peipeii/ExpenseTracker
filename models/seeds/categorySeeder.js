const Category = require('../category')
const db = require('../../config/mongoose')
const categoryList = require('./category.json')


db.once('open', () => {
  console.log('mongodb connected')

  for (var key in categoryList.results) {
    Category.create(categoryList.results[key])
  }
  console.log('category seeder done')
})