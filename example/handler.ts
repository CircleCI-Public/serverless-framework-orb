function addNumbers(numbers: Array<number>) {
  let total: number = 0
  numbers.forEach(element => {
    total += element
  })
  return total
}

module.exports.add = async (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(addNumbers(event.numbers))
  }
  return response
}
