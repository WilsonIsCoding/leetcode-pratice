function isSubsequence(s: string, t: string): boolean {
    let sPosition: number = 0
    let tPosition: number = 0
    while (sPosition < s.length && tPosition < t.length) {
        if (s[sPosition] == t[tPosition]) {
            sPosition++
        }
        tPosition++
    }
    return sPosition === s.length
};