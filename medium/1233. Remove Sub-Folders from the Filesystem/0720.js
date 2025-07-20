/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    folder = folder.sort();
    let res = [];
    for (const fold of folder) {
        if (!res[res.length - 1] || !fold.startsWith(res[res.length - 1] + '/')) {
            res.push(fold)
        }
    }
    return res
};