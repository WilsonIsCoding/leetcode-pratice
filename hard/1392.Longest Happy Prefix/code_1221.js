/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
    let prefixLen = 0;
    let i = 1;
    let lhp = new Array(s.length);
    lhp[0] = 0;
    while (i < s.length) {
        if (s[prefixLen] == s[i]) {
            prefixLen++
            lhp[i] = prefixLen;
            i++
        } else {
            if (prefixLen > 0) {
                prefixLen = lhp[prefixLen - 1]
            } else {
                lhp[i] = 0
                i++
            }
        }
    }
    return s.substring(0, prefixLen)
};
/*
s=>         a b a x a b a b a x 
i->         0 1 2 3 4 5 6 7 8 9
lhp=>       0 0 1 0 1 2 3 2 3 4
prefixLen=> 0 0 1 0 
*/