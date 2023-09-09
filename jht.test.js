const jht = require('./index');

describe("jht", () => {
    it("should return an HTML table string from a JSON object", () => {
        const json = {name: 'John', age: 25, country: 'USA'};
        const keys = ['name', 'country'];
        const result = jht(json, keys);

        // Check if the result matches the expected HTML string
        expect(result).toBe('<table><tr><th>name</th><th>country</th></tr><tr><td>John</td><td>USA</td></tr></table>');
    });
});