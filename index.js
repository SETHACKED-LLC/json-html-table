/**
 * @fileOverview This module is used to convert a JSON object into an HTML table.
 * @author Jason Clay <sethacked@gmail.com> (https://sethacked.com)
 * @version 1.0.0 
 */

'use strict';

/**
 * This function converts a JSON object into an HTML table.
 * It takes in a JSON object and an array of keys which would be whitelisted into the table.
 * If the keys are not found in the JSON object, they would be ignored.
 *
 *
 * @param  {Object} json - JSON object to be converted.
 * @param  {Array} keys - Array with the allowed keys into the table.
 * @return {string} A string with HTML table format.
 * @throws {Error} If the parameters are not provided.
 *
 * @example
 * 
 * jsonToHtmlTable({name: 'John', age: 25, country: 'USA'}, ['name', 'country'])
 * // returns '<table><tr><th>name</th><th>country</th></tr><tr><td>John</td><td>USA</td></tr></table>
 *
 * @public
 */
function jsonToHtmlTable(json, keys) {
    if (!json || !keys || Object.keys(json).length === 0 || keys.length === 0) {
        throw new Error('Both the parameters json and keys must be provided and not empty.');
    }
 
    var table = '<table>';

    // Generate table headers
    table += '<tr>';
    keys.forEach(key => {
        if(Object.prototype.hasOwnProperty.call(json, key)) {
            table += '<th>' + key + '</th>';
        }
    });
    table += '</tr>';

    // Generate table data
    table += '<tr>';
    keys.forEach(key => {
        if(Object.prototype.hasOwnProperty.call(json, key)) {
            table += '<td>' + json[key] + '</td>';
        }
    });
    table += '</tr>';
 
    table += '</table>';

    return table;
}

module.exports = jsonToHtmlTable;