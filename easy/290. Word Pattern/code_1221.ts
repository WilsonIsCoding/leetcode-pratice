function wordPattern(pattern: string, s: string): boolean {
    const patternMap: Map<string, number> = new Map<string, number>();
    const sMap: Map<string, number> = new Map<string, number>();
    const splitS = s.split(" ");
    if (pattern.length !== splitS.length) return false;
    for (let i: number = 0; i < pattern.length; i++) {
        if (!patternMap.get(pattern[i])) patternMap.set(pattern[i], i)
        if (!sMap.get(splitS[i])) sMap.set(splitS[i], i)
    }
    for (let i: number = 0; i < pattern.length; i++) {
        if (patternMap.get(pattern[i]) !== sMap.get(splitS[i])) return false
    }
    return true
}



