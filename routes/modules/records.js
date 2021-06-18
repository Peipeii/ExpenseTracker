// record路由模組
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const Helpers = require('../../helpers/hbshelpers')
const moment = require('moment')

router.get('/new', (req, res) => {
  const today = moment().format("YYYY-MM-DD")
  return Category.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(categories => res.render('new', { categories, today }))
    .catch(error => console.error(error))
})

router.post('/', (req, res) => {
  const { name, category, date, amount } = req.body
  const formatDate = moment(date).format('MMMM DD, YYYY')
  let categoryIcon = Helpers.getCategoryIcon(Helpers.categoryList, category)
  if (categoryIcon === null) { categoryIcon = 'fa-pen' }
  return Record.create({ name, category, categoryIcon, date: formatDate, amount })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then(record => res.render('edit', { record }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, category, date, amount } = req.body
  return Record.findById(id)
    .then(record => {
      record.name = name
      record.category = category
      record.date = date
      record.amount = amount
      return record.save()
    })
    .then(() => res.redirect(`/records/${id}`))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router

