# json-html-table

This is a simple NPM module that converts a JSON object into an HTML table. It takes in a JSON object and an array of keys which are whitelisted into the table. If the keys are not found in the JSON object, they will be ignored.

## Installation

```sh
npm i json-html-table --save
```

## Usage

Import the module in your file:

```js
const jht = require('json-html-table');
```

Call the function with a JSON object and an array of keys:

```js
const json = {name: 'John', age: 25, country: 'USA'}; 
const keys = ['name', 'country']; 
const table = jht(json, keys);
console.log(table);
```

## Output

The function will convert the JSON object to an HTML table. For the above usage example, it should output:

```html
<table>
<tr><th>name</th><th>country</th></tr>
<tr><td>John</td><td>USA</td></tr>
</table>
```

## Example

To convert an object to an HTML table:

```js
const jht = require('json-html-table');
const result = jht({name: 'John', age: 25, country: 'USA'}, ['name', 'country']);
console.log(result);
```

## Error Handling

If either the JSON object or keys array is not provided or either is empty, the function will throw an error.

## License

GNU GPLv3