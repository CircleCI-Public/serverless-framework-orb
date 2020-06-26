function addNumbers(numbers: Array<number>) {
  console.log("Adding Numbers")
  console.log("Numbers to add: " + numbers)
  return numbers.reduce((acc,cv) => acc + cv)
}

module.exports.add = async (event: any) => {

  if (event.body) {
    console.log("Running on AWS")
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
    body: JSON.stringify({result: `${addNumbers(numbers)}`})
  }
  console.log("Resonse: ")
  console.log(response)
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