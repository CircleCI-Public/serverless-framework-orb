function addNumbers(numbers: Array<number>) {
  return numbers.reduce((acc,cv) => acc + cv)
}

module.exports.add = async (event: any) => {
 //Works locally only. Has a problem behind the API Gateway
  let bodyObj = event.body
  const response = {
    statusCode: 200,
    body: {result: `${addNumbers(bodyObj.numbers)}`}
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