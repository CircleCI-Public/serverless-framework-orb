function addNumbers(numbers: Array<number>) {
  console.log("Adding Numbers")
  console.log("Numbers to add: " + numbers)
  console.log(typeof numbers)
  let total = 0
  numbers.forEach( number => {
    total += number
  })
  return total
}

module.exports.add = async (event: any) => {

  if (event.body) {
    var numbers = event.body.numbers
  } else if (event.numbers) {
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