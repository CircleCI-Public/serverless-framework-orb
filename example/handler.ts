function addNumbers(numbers: Array<number>) {
  console.log("CloudWatch: numbers: \n", numbers)
  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue
  return numbers.reduce(reducer)
}

module.exports.add = async (event: any) => {
  // https://stackoverflow.com/a/52240132/8963385
  // Body is being processed as a string, not json, ONLY on API gateway which is failing to properly insert into addNumbers.
  const responseBody = JSON.stringify(event.body)
  console.log("Stringified Body: \n", responseBody)
  const parsedBody = JSON.parse(responseBody)
  console.log("Parsed Body: \n", parsedBody)
  const response = {
    statusCode: 200,
    body: JSON.stringify(addNumbers(parsedBody.numbers))
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