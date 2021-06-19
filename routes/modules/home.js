// home路由模組
// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Category & Record model
const Category = require('../../models/category')
const Record = require('../../models/record')
const PublicFunc = require('../../public/javascript/main')

// 定義首頁路由
router.get('/', (req, res) => {

  Promise.all([Category.find().lean().sort({ _id: 'asc' }), Record.find().lean().sort({ _id: 'asc' })])
    .then((results) => {
      const [categories, records] = results
      PublicFunc.categoryList = categories
      const totalAmount = PublicFunc.calculateTotal(records)
      res.render('index', { records, categories, totalAmount })
    })
    .catch(error => console.error(error))
})

// 匯出路由模組
module.exports = router