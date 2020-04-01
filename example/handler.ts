function addNumbers(numbers: Array<number>) {
  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue
  return numbers.reduce(reducer)
}

module.exports.add = async (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(addNumbers(event.numbers))
  }
  return response
}

module.exports.hello = async (event: any) => {
  const response = {
    statusCode: 200,
    body: "Hello!"
  }
  console.log({ response })
  return response
}