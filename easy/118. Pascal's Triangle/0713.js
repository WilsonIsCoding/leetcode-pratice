/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = [];
    let firstRow = [1];
    result.push(firstRow);
    for (let i = 1; i < numRows; i++) {
        let prevRow = result[i - 1];
        let currentRow = [1];
        for (let j = 1; j < prevRow.length; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }
        currentRow.push(1)
        result.push(currentRow);
    }
    return result
};