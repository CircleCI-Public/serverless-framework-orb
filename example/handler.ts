function addNumbers(numA: number, numB: number) {
  return numA + numB
}

module.exports.add = async (event: any) => {
  const eventString = JSON.stringify(event.body)
  const numbers = JSON.parse(eventString)
  console.log("Numbers: ", numbers)
  console.log("Type of Numbers: ", typeof(numbers))
  console.log(numbers.numA, numbers.numB)
  const response = {
    statusCode: 200,
    body: JSON.stringify(addNumbers(numbers.numA, numbers.numB))
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