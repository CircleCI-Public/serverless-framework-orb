function addNumbers(numbers: Array<number>) {
  
  return numbers.reduce((acc, value) => {
    return acc + value
  }, 0)
}

module.exports.add = async (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(addNumbers(event.numbers))
  }
  return response
}
