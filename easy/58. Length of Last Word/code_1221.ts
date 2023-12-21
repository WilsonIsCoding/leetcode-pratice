function lengthOfLastWord(s: string): number {
    let sArr: string[] = s.split(' ')
    let sLen: number = sArr.length
    for (let i: number = sLen - 1; i >= 0; i--) {
        if (sArr[i] !== '') {
            return sArr[i].length
        }
    }
};