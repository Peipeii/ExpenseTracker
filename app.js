const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const moment = require('moment')

// Mongoose 連線設定只需要「被執行」，不需要接到任何回傳參數繼續利用，所以這裡不需要再設定變數。
require('./config/mongoose')

const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000
console.log(process.env)
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: require('./config/handlebars-helpers')
}))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// 引用路由器(路徑設定為 /routes 就會自動去尋找目錄下叫做 index 的檔案。)
// 將 request 導入路由器
app.use(routes)

app.listen(PORT, () => {
  console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')} App is running on http://localhost:${PORT}`)
})
