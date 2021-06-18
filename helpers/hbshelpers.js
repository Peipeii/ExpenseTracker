let categoryList = []

function getCategoryIcon(arr, val) {
  const result = arr.find(o => o.name === val)
  if (result != null) return arr.find(o => o.name === val).code
  return null
}

module.exports = {
  categoryList,
  getCategoryIcon
}