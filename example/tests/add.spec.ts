const addFunction = require("../handler").add

describe("add function", () => {
    test("it should add all numbers passed via array", async () => {
        let input = require("../sampleData/data.json")
        let output = {"body": '{\"result\":\"15\"}', "statusCode": 200}
        expect(await addFunction(input)).toEqual(output)
    })
})