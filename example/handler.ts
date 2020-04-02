function addNumbers(numbers: Array<number>) {
  console.log("CloudWatch: numbers: \n", numbers)
  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue
  return numbers.reduce(reducer)
}

module.exports.add = async (event: any) => {
  // https://stackoverflow.com/a/52240132/8963385
  // Body is being processed as a string, not json, ONLY on API gateway which is failing to properly insert into addNumbers.
  const responseBody = JSON.stringify(event.body)
  console.log("Full event Body: \n", responseBody)
  const parsedBody = JSON.parse(responseBody)
  console.log("Full parsedBody: \n", parsedBody)
  const responseNumbers = parsedBody.numbers
  console.log("Full responseNumbers: \n", responseNumbers)
  const response = {
    statusCode: 200,
    body: JSON.stringify(addNumbers(responseNumbers))
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