# Expense Tracker
打造一個簡單的網路記帳工具-CRUD「支出紀錄」。

## 功能描述 (Features)
- 使用者於首頁查看到每項支出的紀錄
- 使用者於首頁查看到支出紀錄的總金額
- 使用者可以新增一筆支出
- 使用者每次可以修改一筆支出內容
- 使用者每次可以刪除一筆支出紀錄
- 在首頁可以根據支出「類別」篩選支出紀錄；總金額的計算只會包括被篩選出來的支出總和
- 使用者點擊`廣志の私帳`能回到首頁顯示全部支出的清單列表


## 安裝與執行步驟 (Installation and Execution)
1. 下載專案至您的本機電腦
```
$ git clone https://github.com/Peipeii/ExpenseTracker.git
```
2. 變換當前的目錄至1.下載位置
```
$ cd ExpenseTracker
```

3. 安裝專案相依套件
```
$ npm install
```

4. 新增種子資料
```
$ npm run seed
```

5. 執行
```
$ npm run dev
```

## API Reference
category.json
record.json

