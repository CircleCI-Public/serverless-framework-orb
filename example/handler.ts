function addNumbers(numbers: Array<number>) {
  console.log("Adding Numbers")
  console.log("Numbers to add: " + numbers)
  console.log("type of numbers: " + typeof numbers)
  let sum = numbers.reduce((acc,cv) => acc + cv)
  console.log("Sum: " + sum)
  return sum
}

module.exports.add = async (event: any) => {

  if (event.body) {
    console.log("Running on AWS")
    console.log(JSON.stringify(event.body))
    let body = JSON.parse(event.body)
    var numbers = body.numbers
  } else if (event.numbers) {
    console.log("Running Locally")
    var numbers = event.numbers
  } else {
    console.log ("ERROR IN EVENT")
  }
  const response = {
    statusCode: 200,
    body: {result: `${addNumbers(numbers)}`}
  }
  console.log("Resonse: ")
  console.log(JSON.stringify(response))
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