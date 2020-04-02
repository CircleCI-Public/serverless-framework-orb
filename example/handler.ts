function addNumbers(numbers: Array<number>) {
  console.log("CloudWatch: numbers: \n", numbers)
  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue
  return numbers.reduce(reducer)
}

module.exports.add = async (event: any) => {
  // https://stackoverflow.com/a/52240132/8963385
  // Body is being processed as a string, not json, which is failing to properly insert into addNumbers.
  console.log("Full event Body: \n", JSON.stringify(event.body))
  const response = {
    statusCode: 200,
    body: JSON.stringify(addNumbers(JSON.parse(event.body.numbers)))
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