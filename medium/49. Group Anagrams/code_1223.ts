const sortString = (str) => {
    return str.split('').sort().join('')
}
function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string,string[]>();
    for (let str of strs) {
        let keyStrs = sortString(str)
        let foundVal = map.get(keyStrs)
        if (foundVal) {
            foundVal.push(str)
            map.set(keyStrs, foundVal)
        } else {
            map.set(keyStrs, [str])
        }
    }
    return Array.from(map.values())
};