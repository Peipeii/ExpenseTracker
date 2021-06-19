let categoryList = []

function getCategoryIcon(arr, val) {
  const result = arr.find(o => o.name === val)
  if (result != null) return arr.find(o => o.name === val).code
  return null
}

function calculateTotal(records) {
  const result = records.map(a => a.amount)
  const sum = result.reduce((a, b) => a + b, 0)
  return sum
}

module.exports = {
  categoryList,
  getCategoryIcon,
  calculateTotal
}