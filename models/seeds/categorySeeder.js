const Category = require('../category')
const db = require('../../config/mongoose')
const { results } = require('./category.json')

db.once('open', () => {
  Category.create(results)
    .then(() => {
      console.log('category seeder done')
      return db.close()
    })
    .then(() => {
      console.log('mongodb disconnected!')
    })
    .catch(err => console.log(err))
})
