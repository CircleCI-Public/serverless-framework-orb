function addNumbers(numbers: Array<number>) {
  console.log("Adding Numbers")
  console.log("Numbers to add: " + numbers)
  console.log(typeof numbers)
  return numbers.reduce((acc,cv) => acc + cv)
}

module.exports.add = async (event: any) => {

  if (event.body) {
    console.log("Running on AWS")
    console.log(JSON.stringify(event.body))
    var numbers = event.body.numbers
  } else if (event.numbers) {
    console.log("Running Locally")
    var numbers = event.numbers
  } else {
    console.log ("ERROR IN BODY")
  }
  const response = {
    statusCode: 200,
    body: {result: `${addNumbers(numbers)}`}
  }
  return response
}

module.exports.hello = async (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello!" })
  }
  console.log({ response })
  return response
}