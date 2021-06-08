const separateZeros = (list) => {
  const listWithoutZeros = list.filter(Boolean)
  const listOfZeros = list.filter((digit) => !Boolean(digit))

  return { listWithoutZeros, listOfZeros }
}

const sumToArrayAsNumber = (list, sum) => {
  const listAsNumber = Number(list.join(''))
  return (listAsNumber + sum)
    .toString()
    .split('')
    .map(Number)
}

const multiplyEvenBy = (list, mult) => (
  list.map((value, index) => index % 2 ? value : value * mult)
)

const getMaxSubarraySum = (list) => (
  list.reduce((acc, value) => {
    const currentSum = Math.max(value, acc.currentSum + value)
    const maxSum = Math.max(acc.maxSum, currentSum)
    return { currentSum, maxSum }
  }, {
    currentSum: -Number.MAX_VALUE,
    maxSum: -Number.MAX_VALUE
  }).maxSum
)

const main = (list) => {
  const { listWithoutZeros, listOfZeros } = separateZeros(list)
  console.log([
    ...listWithoutZeros,
    ...listOfZeros
  ])

  const listIncrementedByOne = sumToArrayAsNumber(listWithoutZeros, 1)
  console.log(listIncrementedByOne)

  const finalList = multiplyEvenBy(listIncrementedByOne, -1)

  const maxSum = getMaxSubarraySum(finalList)
  console.log(maxSum)

  return maxSum
}

module.exports = main

// main([4, 8, 0, 9, 2, 5, 0, 3, 3, 0])
// main([4, 8, 9, 2, 5, 8, 4, 8])
// main([9, 0, 9, 0, 9, 0])
