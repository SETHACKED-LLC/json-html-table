/**
 * @fileOverview This module is used to convert an aray of JSON objects into an HTML table.
 * @author First Last <email@provider.com> (https://your.website)
 * @version 1.0.0 
 */

'use strict';

/**
 * This function converts an array of JSON objects into an HTML table.
 * It takes in an array of JSON objects and an array of keys which would be whitelisted into the table.
 * If the keys are not found in the JSON objects, their corresponding cell would be empty.
 *
 *
 * @param  {Array} jsonArray - Array of JSON object to be converted.
 * @param  {Array} keys - Array with the whitelisted keys into the table.
 * @return {string} A string with HTML table format.
 * @throws {Error} If the parameters are not provided.
 *
 * @example
 * 
 * jsonToHtmlTable([{name: 'John', age: 25, country: 'USA'}, {name: 'Doe', age: 30, country: 'UK'}], ['name', 'country'])
 * // returns '<table><tr><th>name</th><th>country</th></tr><tr><td>John</td><td>USA</td></tr><tr><td>Doe</td><td>UK</td></tr></table>
 *
 * @public
 */
function jsonToHtmlTable(jsonArray, keys) {
    if (!Array.isArray(jsonArray) || !Array.isArray(keys) || jsonArray.length === 0 || keys.length === 0) {
        throw new Error('Both the parameters jsonArray and keys must be provided as non-empty arrays.');
    }

    var table = '<table>';

    // Generate table headers
    table += '<tr>';
    keys.forEach(key => {
            table += '<th>' + key + '</th>';
    });
    table += '</tr>';

    // Generate table rows
    jsonArray.forEach( obj => {
        table += '<tr>';
        keys.forEach(key => {
            table += '<td>' + (obj[key] || '') + '</td>'; // if the key doesn't exist in the json object, an empty cell is added.
        });
        table += '</tr>';
    });
 
    table += '</table>';

    return table;
}

module.exports = jsonToHtmlTable;