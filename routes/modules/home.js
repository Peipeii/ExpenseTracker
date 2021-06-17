// home路由模組
// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Category & Record model
const Category = require('../../models/category')
const Record = require('../../models/record')
let categories

// 定義首頁路由
router.get('/', (req, res) => {
  Category.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(categories => setCategories(categories))
    .catch(error => console.error(error))

  Record.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(records => res.render('index', { records, categories }))
    .catch(error => console.error(error))
})

function setCategories(obj) {
  categories = obj

}
// 匯出路由模組
module.exports = router