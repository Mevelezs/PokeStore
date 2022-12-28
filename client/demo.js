var arr = ['1', '3', '4', '6'];
const index = arr.findIndex(e => e === '3')
console.log(index)
console.log(arr.splice(index, 1, 3, 'd' ,65))
console.log(arr)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months)
