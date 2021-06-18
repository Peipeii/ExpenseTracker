// 總路由器
// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const moment = require('moment')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')} | ${req.method}  ${req.url}`)
  next()
})

// 引入 home 模組程式碼
const home = require('./modules/home')
router.use('/', home)
// router.use('/', home.router)


// 引入 records 模組程式碼
const records = require('./modules/records')
router.use('/records', records)


// 準備引入路由模組
// 匯出路由器
module.exports = router