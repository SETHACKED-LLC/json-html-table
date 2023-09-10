# JSON to HTML Table Converter

This Node.js module converts an array of JSON objects into an HTML table. The table includes only the keys specified in the whitelist. If a key in the whitelist doesn't exist in a certain JSON object, an empty cell will be added to the corresponding spot in the table.

## Installation

```bash
npm install json-html-table
```

You can also include it in your `package.json` file:

```javascript
"dependencies": {
    "json-html-table": "1.0.0"
}
```

Then run `npm install`.

## Usage

Here is an example of how to use this module:

```javascript
const jht = require('json-html-table');

let jsonArray = [{
    name: 'John',
    age: 25,
    country: 'USA'
}, {
    name: 'Doe',
    age: 30,
    country: 'UK'
}];

let keys = ['name', 'country'];

console.log(jht(jsonArray, keys));
```

This will print:

```html
<table>
<tr><th>name</th><th>country</th></tr>
<tr><td>John</td><td>USA</td></tr>
<tr><td>Doe</td><td>UK</td></tr>
</table>
```
## Testing

Unit tests for this module can be run with:

```bash
npm run test
```