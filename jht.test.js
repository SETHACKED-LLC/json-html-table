const jht = require('./index');

describe("jht", () => {
    it("should return an HTML table string from an array of JSON objects", () => {
        const jsonArray = [{name: 'John', age: 25, country: 'USA'}, {name: 'Doe', age: 30, country: 'UK'}];
        const keys = ['name', 'country'];
        const result = jht(jsonArray, keys);

        // Check if the result matches the expected HTML string
        expect(result).toBe('<table><tr><th>name</th><th>country</th></tr><tr><td>John</td><td>USA</td></tr><tr><td>Doe</td><td>UK</td></tr></table>');
    });
});